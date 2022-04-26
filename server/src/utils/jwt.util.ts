import jwt, { VerifyErrors } from 'jsonwebtoken';
import { CreateToken, DecodeToken } from '../types/jwt';
import { is_null_or_undefined } from './common';
import { config } from 'dotenv';
config();

// ========================================================================================================

const JWT_SECRET = process.env.JWT_SECRET;
console.log('###########  JWT_SECRET= ', JWT_SECRET);


function create_token(obj: object, expiresIn: number = 3 * 24 * 60 * 60) {
   // JWT expires in 3 days => 3 * 24 * 60 * 60
   return new Promise<CreateToken>((resolve, reject) => {
      try {
         if (!JWT_SECRET) {
            console.log('#####  JWT_SECRECT is undefined, JWT_SECRET=', JWT_SECRET);
            throw new Error('JWT Secret is undefined');
         }

         const secret: string = JWT_SECRET;
         const token: string = jwt.sign(obj, secret, { expiresIn });

         return resolve({ token });
      } catch (error) {
         return reject(error);
      }
   });
}

const decode_token = <obj_decode extends { [key: string | number | symbol]: any }>(token: string): Promise<DecodeToken<obj_decode>> => {
   return new Promise<DecodeToken<obj_decode>>((resolve, reject) => {
      try {
         if (!JWT_SECRET) {
            console.log('#####  JWT_SECRECT is undefined, JWT_SECRET=', JWT_SECRET);
            throw new Error('JWT Secret is undefined');
         }
         
         const secret: string = JWT_SECRET;
         return jwt.verify(token, secret, (error: VerifyErrors | null, decoded: object | undefined) => {
            if (error) return resolve({ decoded: null, error });

            if (is_null_or_undefined(decoded)) return resolve({ decoded: null });

            return resolve({ decoded: decoded as obj_decode });
         });
      } catch (error) {
         return reject(error);
      }
   });
}

export {
   create_token, decode_token,
};
