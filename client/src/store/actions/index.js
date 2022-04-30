/* eslint-disable import/no-named-as-default */
import authActions from './auth';
import tweetActions from './tweet';
import userActions from './user';

export default {
  ...authActions,
  ...tweetActions,
  ...userActions,
};
