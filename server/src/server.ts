import os from 'os';
import http from 'http';
import server from './index';
import cluster from 'cluster';
import { logger } from '@utils/logger';

import { config } from 'dotenv';
config();



const num_of_cores = os.cpus().length;
const app = http.createServer(server);
const PORT = process.env.PORT || 3000;

function connected() {
   if (cluster.isPrimary) {
      logger.info(`Master started at ${new Date()}, PID: ${process.pid} at ${PORT}`);

      if (process.env.NODE_ENV) {
         for (let i = 0; i < num_of_cores; i += 1) {
            cluster.fork();
            logger.info(`Worker ${process.pid} strated at ${new Date()}`);
         }

         cluster.on('exit', () => {
            logger.warn(`Worker ${process.pid} died at ${new Date()}`);
         });
      }
   }
   else {
      logger.info(`Worker ${process.pid} started at ${new Date()}`);
   }
}

function error(err: NodeJS.ErrnoException) {
   if (err.syscall !== 'listen') {
      throw err.stack;
   }

   const bind = (typeof process.env.PORT === 'string') ? `Pipe ${PORT}` : `Port ${PORT}`;

   switch (err.code) {
      case 'EACCES':
        logger.warn(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
  
      case 'EADDRINUSE':
        logger.warn(`${bind} is already in use`);
        process.exit(1);
        break;
  
      default:
        throw error;
    }
}


//
app.listen(PORT, () => {
   console.log('Listening on port = ', PORT);
});
app.on('error', error);
app.on('listening', connected);
