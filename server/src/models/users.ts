import { IUser } from '@/types';
import { Model } from 'objection';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserModel extends IUser {}

class UserModel extends Model {
  static get tableName() {
    return 'users';
  }
}

export {
  UserModel
};