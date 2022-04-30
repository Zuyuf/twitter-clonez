import { ITweet } from '@types';
import { Model } from 'objection';
import { TweetCommentModel } from '@models/tweetComments';
import { UserModel } from '@models/users';

interface TweetModel extends ITweet {}

// eslint-disable-next-line no-redeclare
class TweetModel extends Model {
  count: string | undefined;

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
    },
    user: {
      relation: Model.HasManyRelation,
      modelClass: UserModel,
      join: {
        from: 'users.id',
        to: 'tweets.userId'
      }
    }
  };

  //
}

export {
  TweetModel
};
