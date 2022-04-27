/* eslint-disable camelcase */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';

import { db_manager } from '@utils/db_manager';

// Middlewares
import globalErrorHandler from '@middlewares/globalErrorHandler';

// Routes
import user_routes from '@controllers/auth/user.controller';
import tweet_routes from '@/controllers/tweets/tweets.controller';

// -----------------------------------------------------------------

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(cors());
    this.app.use(body_parser.json({ limit: '25mb' }));
    this.app.use(body_parser.urlencoded({ limit: '25mb', extended: true }));
    this.app.use(cookie_parser());

    db_manager.connect();

    // Routes
    this.app.use(['/users'], user_routes);
    this.app.use(['/tweets'], tweet_routes);

    // Globbal Error Handler
    this.app.use(globalErrorHandler);
  }

  private routes() {
    this.app.get('/ping', async (req: Request, res: Response) => {
      try {
        res.status(200).json({
          status: 200,
          message: 'PONG!'
        }).end();
      } catch (error) {
        res.status(400).json({ status: 400, message: JSON.stringify(error) }).end();
      }
    });
  }
}

export default new Server().app;
