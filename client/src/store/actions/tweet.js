/* eslint-disable brace-style */
import HTTP from '@/services/index';

const tweetActions = {
  async fetchTweets(ctx) {
    try {
      const RESP = await HTTP.get('/tweets/all');

      if (RESP.status !== 200) {
        return Promise.reject(new Error('ERROR: Error while fetching tweets'));
      }

      const tweets = RESP.data?.result?.tweets ?? [];
      ctx.commit('setTweets', tweets);
      return Promise.resolve(tweets);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Fetch Tweets Action')
      );
    }
  },
  async createTweet(ctx, payload) {
    try {
      const RESP = await HTTP.post('/tweets/create', {
        body: payload.body,
      });

      if (RESP.status !== 200) {
        return Promise.reject(new Error('ERROR: Error while Creating tweet'));
      }

      return Promise.resolve(RESP.data.result.tweet);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Fetch Tweets Action')
      );
    }
  },
};

export { tweetActions };
export default tweetActions;
