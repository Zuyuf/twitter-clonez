import crypto, { Hmac } from 'crypto';
import randomstring from 'randomstring';
import { EncryptPassword } from '../types';

// ==========================================================================================

const generate_salt = () => randomstring.generate(15);

export const Hash = {

   encrypt(password: string): Promise<EncryptPassword> {
      try {
         if (!password) return Promise.resolve({ error: new Error('Password cannot be blank or null'), password: null });

         const salt = generate_salt();
         const HmacMethod = 'sha512';

         const hash: Hmac = crypto.createHmac(HmacMethod, salt);
         hash.update(password);

         return Promise.resolve({ error: null, password: { hash: hash.digest('hex'), salt } });
      } catch (error) {
         return Promise.reject(error);
      }
   },

   compare(hashed_password: string, salt: string, password_claim: string): boolean {
      try {
         const HmacMethod = 'sha512';

         const hash: Hmac = crypto.createHmac(HmacMethod, salt);
         hash.update(password_claim);

         if (hash.digest('hex') === hashed_password) return true;

         return false;
      } catch (error) {
         return false;
      }
   },

};

export default Hash;
