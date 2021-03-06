/* eslint-disable camelcase */
import express, { Router, Request, Response } from 'express';

import { Authenticate } from '@middlewares/authenticate';
import ExistsValidator from '@middlewares/exitsValidator';

import { CreateToken, EncryptPassword, IConnection, IUser, IUserPublic } from '@types';

import Hash from '@utils/hash.util';
import { response } from '@utils/response';
import { create_token } from '@utils/jwt.util';

import { UserModel } from '@models/users';
import { ConnectionModel } from '@/models/connections';
import { TweetModel } from '@/models/tweets';

/**
 * APIs List:
 * 1. GET    /me      (Get current User Profile)
 * 2. POST   /login
 * 2. POST   /signup
 */

const router: Router = express.Router();
const Validate = {
  Register: { body: ['name', 'email', 'password'] },
  Login: { body: ['email', 'password'] },
  Follow: { body: ['followUserId'] }
};

// =================================================================================================

/** is LoggedIn */
router.get('/me', Authenticate(['user']), async (req: Request, res: Response) => {
  try {
    if (req.user === undefined) {
      return response(403, { message: 'Unauthorized' }, res);
    }

    return response(200, { message: 'Authorized', user: req.user }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching User Profile' }, res, error);
  }
});

/** stats */
router.get('/my/stats', Authenticate(['user']), async (req: Request, res: Response) => {
  try {
    if (req.user === undefined) {
      return response(403, { message: 'Unauthorized' }, res);
    }

    const userTweetCount = await TweetModel.query().where('userId', req.user?.id as number).count();
    if (!userTweetCount || userTweetCount.length < 1) return response(400, { message: 'Failed to get Tweet count' }, res);

    const userFollowsCount = await ConnectionModel.query().where('userId', req.user?.id as number).count();
    if (!userFollowsCount || userFollowsCount.length < 1) return response(400, { message: 'Failed to get users follows count' }, res);

    const userFollowersCount = await ConnectionModel.query().where('followsUserId', req.user?.id as number).count();
    if (!userFollowersCount || userFollowersCount.length < 1) return response(400, { message: 'Failed to get users followers count' }, res);

    const userStats = {
      tweet_count: userTweetCount[0].count,
      user_follows_count: userFollowsCount[0].count,
      user_followers_count: userFollowersCount[0].count
    };

    return response(200, { message: 'Fetched User Stats', userStats }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching User Profile' }, res, error);
  }
});

/** stats */
router.get('/users_i_can_follow', Authenticate(['user']), async (req: Request, res: Response) => {
  try {
    if (req.user === undefined) {
      return response(403, { message: 'Unauthorized' }, res);
    }

    const usersExceptMe = await UserModel.query().whereNot('id', req.user?.id as number).select('id', 'name', 'email');
    if (!usersExceptMe) return response(400, { message: 'Failed to get users' }, res);

    const usersIFollow = await ConnectionModel.query().where('userId', req.user?.id as number);
    if (!usersIFollow) return response(400, { message: 'Failed to get users follows' }, res);

    const usersICanFollow = usersExceptMe.filter(u => usersIFollow.filter(uif => uif.followsUserId === u.id).length < 1);

    return response(200, { message: 'Fetched Users you could follow', usersICanFollow: usersICanFollow.slice(0, 5) }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching Users to follow' }, res, error);
  }
});

/** Login */
router.post('/login', ExistsValidator(Validate.Login), async (req: Request, res: Response) => {
  try {
    console.log('login api', new Date());

    const user = await UserModel
      .query()
      .findOne({ email: req.body.email });

    if (!user) return response(404, { message: 'User not found' }, res);

    // Verify Password
    if (!Hash.compare(user.hashedPassword, user.salt, req.body.password)) {
      return response(400, { message: 'Invalid password' }, res);
    }

    // Password matched, Create Token
    const userPublic: IUserPublic = {
      id: user.id,
      name: user.name,
      email: user.email,
      provider: user.provider,
      verifiedBadge: user.verifiedBadge,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at
    };

    const token: CreateToken = await create_token(userPublic, 1 * 24 * 60 * 60);
    if (!token.token) return response(400, { message: 'Exception in creating a token' }, res);

    return response(200, { message: 'Login Succesfull', token: token.token, user }, res);
  } catch (error) {
    return response(500, { message: 'Exception in User Login API' }, res, error);
  }
});

/** Create Admin */
router.post('/signup', ExistsValidator(Validate.Register), async (req: Request, res: Response) => {
  try {
    const encrypt_password: EncryptPassword = await Hash.encrypt(req.body.password);
    if (encrypt_password.error || !encrypt_password.password) throw new Error(`Password should contain some value: ${encrypt_password.error}`);

    const user_data: IUser = {
      name: req.body.name,
      email: req.body.email,
      provider: 'email',
      hashedPassword: encrypt_password.password.hash,
      salt: encrypt_password.password.salt,
      role: 'user',
      verifiedBadge: false
    };

    const new_user = await UserModel.query().insert(user_data).returning('*');
    console.log('new_user', new_user);

    const userPublic: IUserPublic = {
      id: new_user.id,
      name: new_user.name,
      email: new_user.email,
      provider: new_user.provider,
      verifiedBadge: new_user.verifiedBadge,
      role: new_user.role,
      created_at: new_user.created_at,
      updated_at: new_user.updated_at
    };

    // Password matched, Create Token
    const token: CreateToken = await create_token(userPublic, 1 * 24 * 60 * 60);
    if (!token.token) return response(400, { message: 'Exception in creating a token' }, res);

    return response(200, { message: 'User Created', user: new_user, token: token.token }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Create User API' }, res, error);
  }
});

/** follow user */
router.post('/follow', [Authenticate(['user']), ExistsValidator(Validate.Follow)], async (req: Request, res: Response) => {
  try {
    if (req.user === undefined) return response(403, { message: 'Unauthorized' }, res);

    const user_to_follow = await UserModel.query().findById(req.body.followUserId);
    if (!user_to_follow) return response(404, { message: 'User with given id was not found' }, res);

    const check_already_follows = await ConnectionModel
      .query()
      .where('userId', req.user?.id as number)
      .where('followsUserId', req.body.followUserId);

    if (!check_already_follows || check_already_follows.length > 0) return response(404, { message: 'already follows the User' }, res);

    const follow_user_data: IConnection = {
      userId: req.user?.id as number,
      followsUserId: req.body.followUserId
    };

    const new_connection = await ConnectionModel.query().insert(follow_user_data).returning('*');

    return response(200, { message: 'Followed User', connection: new_connection }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching User Profile' }, res, error);
  }
});

export default router;
