/* eslint-disable max-lines-per-function */
import { Request, Response, NextFunction } from 'express';

import { response } from '@utils/response';
import { decode_token } from '@utils/jwt.util';
import { is_null_or_undefined } from '@utils/common';

import { DecodeToken, IRole, IUserPublic } from '@types';

// import { UserModel } from '@models/users';

// ================================================================================================

export function Authenticate(roles: IRole[]) {
   return async (req: Request, res: Response, next: NextFunction) => {
      try {
         const token = req.header('Authorization') ?? undefined;
         if (!token) return response(401, { message: 'Access denied. No token provided.' }, res);

         const decoded_claims: DecodeToken<IUserPublic> = await decode_token(token);

         if (decoded_claims.error) return response(401, { message: 'Invalid token!', error: decoded_claims.error }, res);
         if (is_null_or_undefined(decoded_claims.decoded)) return response(401, { message: 'Invalid token!' }, res);

         //
         const user = decoded_claims.decoded;
         if (user === null || user === undefined)return response(401, { message: 'Invalid token!' }, res);

         //
         if (roles.indexOf(user.role) === -1) {
            return response(401, { message: 'Permission not available to perform this operation' }, res);
         }

         req.user = user;
         return next();
         // return response(401, { message: 'Unauthorized request!' }, res);
      } catch (error) {
         return response(401, { message: 'Unauthorized request!' }, res);
      }
   };
}
