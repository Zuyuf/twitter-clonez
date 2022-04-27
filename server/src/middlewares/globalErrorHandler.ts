import { Request, Response, NextFunction } from 'express';
import { logger } from '@utils/logger';
import { response } from '@utils/response';

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(error.message, error);
  return response(500, { message: 'Somthing Failed', error }, res);
};
