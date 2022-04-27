import { ITweetComment } from '@types';
import { Model } from 'objection';

interface TweetCommentModel extends ITweetComment {}

// eslint-disable-next-line no-redeclare
class TweetCommentModel extends Model {
  static get tableName() {
    return 'tweetComments';
  }
}

export {
  TweetCommentModel
};
