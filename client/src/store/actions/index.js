/* eslint-disable import/no-named-as-default */
import authActions from './auth';
import tweetActions from './tweet';

export default {
  ...authActions,
  ...tweetActions,
};
