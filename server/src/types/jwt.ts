import { IPassword } from "./auth/user";

export type EncryptPassword = {
  error: Error | null,
  password: IPassword | null
};

export type CreateToken = { token: string };

export type DecodeToken<obj> = { decoded: obj | null | undefined, error?: Error };
