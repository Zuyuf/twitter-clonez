import { ITweet } from '@types';
import { Model } from 'objection';
import { TweetCommentModel } from '@models/tweetComments';

interface TweetModel extends ITweet {}

// eslint-disable-next-line no-redeclare
class TweetModel extends Model {
  static get tableName() {
    return 'tweets';
  }

  static relationMappings = {
    tweetComments: {
      relation: Model.HasManyRelation,
      modelClass: TweetCommentModel,
      join: {
        from: 'tweets.id',
        to: 'tweetComments.tweetId'
      }
    }
  };

  //
}

export {
  TweetModel
};
