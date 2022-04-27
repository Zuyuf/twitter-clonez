import express, { Router, Request, Response } from 'express';

import { Authenticate } from '@middlewares/authenticate';
import ExistsValidator from '@middlewares/exitsValidator';

import { response } from '@utils/response';
import { TweetModel } from '@models/tweets';
import { ITweet } from '@/types';

/**
 * APIs List:
 * 1. GET    /:id
 * 2. GET    /all
 */


const router: Router = express.Router();
const Validate = {
  TweetId: { params: ['tweet_id'] },
  Create: { body: ['body'] }
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

/** Fetch Tweet by ID */
router.post('/create', [Authenticate(['user']), ExistsValidator(Validate.Create)], async (req: Request, res: Response) => {
  try {
      const tweet_data: ITweet = {
        userId: req.user?.id as number,
        body: req.body.body,
      };

      const new_tweet = await TweetModel.query().insert(tweet_data).returning('*');

      if (!new_tweet) return response(404, { message: 'Tweet with given id was not found' }, res);

      return response(200, { message: 'Created Tweet', tweet: new_tweet }, res);
  } catch (error) {
      return response(500, { message: 'Exception in Creating ' }, res, error);
  }
});

export default router;
