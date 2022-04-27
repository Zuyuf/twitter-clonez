import { ITweet } from '@/types';
import { Model } from 'objection';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TweetModel extends ITweet {}

class TweetModel extends Model {
  static get tableName() {
    return 'tweets';
  }
}

export {
  TweetModel
};