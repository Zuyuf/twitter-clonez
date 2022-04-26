import { IUserPublic } from '@types';

/**
 * Ataaching new attributes to Request object
 */

declare global {
   namespace Express {
      interface Request {
         user?: IUserPublic | null
      }
   }
}
