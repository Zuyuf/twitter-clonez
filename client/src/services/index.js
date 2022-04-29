import axios from 'axios';
// import { Account } from './auth';

// const { BASE_URL } = process.env;
const BASE_URL = 'http://localhost:4400';

// eslint-disable-next-line no-underscore-dangle
const _axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: Account.getJWT() ?? undefined,
  },
});

export const http = {
  get: _axios.get,
  post: _axios.post,
  put: _axios.put,
  delete: _axios.delete,
};

export default http;
