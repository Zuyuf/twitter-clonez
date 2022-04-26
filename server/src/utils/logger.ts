export const logger = {

   info: (msg: string) => {
      console.log(msg);
   },

   warn: (msg: string) => {
      console.warn(msg);
   },

   error: (msg: string, error?: Error) => {
      console.error(msg, error);
   },

}

 