import express, { Router, Request, Response } from 'express';

import { Authenticate } from '@middlewares/authenticate';
import ExistsValidator from '@middlewares/exitsValidator';

import { response } from '@utils/response';
import { TweetModel } from '@models/tweets';
import { ITweet, ITweetComment } from '@/types';
import { TweetCommentModel } from '@/models/tweetComments';

/**
 * APIs List:
 * 1. GET    /all
 * 2. GET    /:tweet_id
 * 3. GET    /:tweet_id/comments
 * 4. POST   /:tweet_id/create_comment
 * 5. POST   /create
 */

const router: Router = express.Router();
const Validate = {
  TweetId: { params: ['tweet_id'] },
  Create: { body: ['body'] },
  CreateTweetComment: { params: ['tweet_id'], body: ['commentBody'] }
};

// =================================================================================================

/** Fetch All Tweets */
router.get('/all', Authenticate(['user']), async (req: Request, res: Response) => {
  try {
    const tweets = await TweetModel.query();

    if (!tweets) return response(400, { message: 'Some error' }, res);

    return response(200, { message: 'Fetched All Tweets', tweets }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching Tweets' }, res, error);
  }
});

/** Fetch Tweet by ID */
router.get('/:tweet_id', [Authenticate(['user']), ExistsValidator(Validate.TweetId)], async (req: Request, res: Response) => {
  try {
    const tweet = await TweetModel.query().findById(req.params.tweet_id);
    if (!tweet) return response(404, { message: 'Tweet with given id was not found' }, res);

    return response(200, { message: 'Fetched Tweet', tweet }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching Tweet by ID' }, res, error);
  }
});

/** Fetch TweetComments by TweetID */
router.get('/:tweet_id/comments', [Authenticate(['user']), ExistsValidator(Validate.TweetId)], async (req: Request, res: Response) => {
  try {
    const tweetComents = await TweetModel.relatedQuery('tweetComments').for(req.params.tweet_id);

    if (!tweetComents) return response(404, { message: 'Tweet comments for given tweet id were not found' }, res);

    return response(200, { message: 'Fetched Tweet Comments', tweetComents }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Fetching TweetComments by TweetID' }, res, error);
  }
});

/** Create TweetComment for TweetID */
router.post('/:tweet_id/create_comment', [Authenticate(['user']), ExistsValidator(Validate.CreateTweetComment)], async (req: Request, res: Response) => {
  try {
    const tweetCommentData: ITweetComment = {
      userId: req.user?.id as number,
      tweetId: parseInt(req.params.tweet_id, 10),
      commentBody: req.body.commentBody
    };

    const tweetComent = await TweetCommentModel.query().insert(tweetCommentData).returning('*');
    if (!tweetComent) return response(404, { message: 'Tweet comment wasnt created' }, res);

    return response(200, { message: 'Created Tweet Comment', tweetComent }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Creating TweetComment' }, res, error);
  }
});

/** Create Tweet */
router.post('/create', [Authenticate(['user']), ExistsValidator(Validate.Create)], async (req: Request, res: Response) => {
  try {
    const tweetData: ITweet = {
      userId: req.user?.id as number,
      body: req.body.body
    };

    const newTweet = await TweetModel.query().insert(tweetData).returning('*');

    if (!newTweet) return response(404, { message: 'Tweet with given id was not found' }, res);

    return response(200, { message: 'Created Tweet', tweet: newTweet }, res);
  } catch (error) {
    return response(500, { message: 'Exception in Creating ' }, res, error);
  }
});

export default router;
