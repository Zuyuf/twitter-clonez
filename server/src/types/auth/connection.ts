import { IUser } from '@types';

type IConnection = {
  id?: number
  userId: number | IUser
  followsUserId: number | IUser
}

export { IConnection };
