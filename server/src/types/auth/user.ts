import { IRole } from ".";

type IPassword = {
  hash: string,
  salt: string,
};

type IUser = {
  id?: number
  name: string
  email: string
  provider: string
  hashedPassword: IPassword['hash']
  salt: IPassword['salt']
  verifiedBadge: boolean
  role: IRole,
};

type IUserPublic = Omit<IUser, 'hashedPassword' | 'salt'>;

export { IUser, IUserPublic, IPassword }