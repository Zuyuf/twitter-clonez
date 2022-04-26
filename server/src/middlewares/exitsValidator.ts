import { Request, Response, NextFunction } from 'express';
import {
  body, query, param, validationResult, Result, ValidationError, ValidationChain,
} from 'express-validator';
import { response } from '../utils/response';
import { IObjValidate } from '../types';

export const ExistsValidator = (objValidate: IObjValidate) => async (req: Request, res: Response, next: NextFunction) => {
  if (objValidate?.body) {
    const bodyValidations: ValidationChain = body(objValidate?.body).exists();
    await bodyValidations.run(req);
  }

  if (objValidate?.params) {
    const bodyValidations: ValidationChain = param(objValidate?.params).exists();
    await bodyValidations.run(req);
  }

  if (objValidate?.query) {
    const bodyValidations: ValidationChain = query(objValidate?.query).exists();
    await bodyValidations.run(req);
  }

  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) return response(400, { message: 'Data not sufficient to proccess the request', ...errors }, res);

  return next();
};

export default ExistsValidator;
