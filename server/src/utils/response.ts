import { Response } from 'express';

export type status_code = 200 | 201 | 202 | 204 |
301 | 302 |
400 | 401 | 402 | 403 | 404 | 409 | 413 |
500 | 502 | 503 | 504;

type status_message = { [key in status_code]: string };
type response_body = {
   status: {
      code: status_code;
      message: string;
   };
   result: any
}

const status_message: status_message = {
   200: 'Success',
   201: 'Created',
   202: 'Accepted',
   204: 'Processed, no content to display',
   301: 'Endpoint moved',
   302: 'Request can\'t be fullfiled',
   400: 'Bad Request',
   401: 'Unauthorized',
   402: 'Payment Required',
   403: 'Forbidden',
   404: 'Not found',
   409: 'Conflict',
   413: 'Payload too large',
   500: 'Internal Server Error',
   502: 'Bad Gateway',
   503: 'Service Unavailable',
   504: 'Gateway Timeout',
};

type IResult = {
   message: string,
   [key: string]: any
}

// ==============================================================================

function response(status: status_code, result: IResult | null, res: Response, error?: unknown) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
   if (error) result.error = error && error.message ? error.message : error;

   const response_body: response_body = {
      status: {
         code: status,
         message: status_message[status],
      },
      result,
   };

   res.status(status).json(response_body).end();
}

export { response };
