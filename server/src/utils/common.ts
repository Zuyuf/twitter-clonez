/* eslint-disable @typescript-eslint/ban-ts-comment */
import day from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

day.extend(customParseFormat);

// =============================================================================================================


function is_null_or_undefined(input_value: any): boolean {
   if (input_value === null || input_value === undefined) {
      return true;
   }

   return false;
}

const QsRequired = <X, Y, Z extends string | boolean | number | Date>(value: X, default_value: Y, parseTo: Z): Y | Z => {
   if (value !== undefined && typeof value === 'string') {
      // @ts-ignore
      if (typeof parseTo === 'number') return parseFloat(value, 10);
      // @ts-ignore
      if (typeof parseTo === 'boolean') return value.trim() === 'true';
      // @ts-ignore
      if (parseTo instanceof Date) return new Date(value);

      // @ts-ignore
      return String(value);
   }

   return default_value;
};

// eslint-disable-next-line arrow-body-style
const get_limit_skip = <X extends { limit?: any, skip?: any }>(req_query: X, default_skip = 0, default_limit = 20) => {
   return {
      limit: QsRequired(req_query.limit, default_limit, 0),
      skip: QsRequired(req_query.skip, default_skip, 1),
   };
};

function roundDecimal(num: number | string, unitsAfterDecimal = 2, toFixed?: number) {
   const numb = typeof num === 'string' ? Number(num) : num;

   const dvisor = 10 ** unitsAfterDecimal;
   let roundedNum = Math.round((numb + Number.EPSILON) * dvisor) / dvisor;

   if (toFixed) roundedNum = parseFloat(roundedNum.toFixed(toFixed));

   return roundedNum;
}

function validateDateString(date: string, date_format = 'YYYY-MM-DD') {
   return day(date, date_format, true).isValid();
}

export {
   is_null_or_undefined,
   QsRequired, get_limit_skip,
   roundDecimal,
   validateDateString,
};
