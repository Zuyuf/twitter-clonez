import { IUser } from '@types';
import { Model } from 'objection';

interface UserModel extends IUser {}

// eslint-disable-next-line no-redeclare
class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  static relationMappings = {
    tweets: {
      relation: Model.HasManyRelation,
      modelClass: UserModel,
      join: {
        from: 'users.id',
        to: 'tweets.userId'
      }
    },
    connections: {
      relation: Model.HasManyRelation,
      modelClass: UserModel,
      join: {
        from: 'connections.userId',
        to: 'users.id'
      }
    }
  };

  //
}

export {
  UserModel
};
