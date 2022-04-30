/* eslint-disable brace-style */
import HTTP from '@/services/index';

const userActions = {
  async fetchUserStats(ctx) {
    try {
      const RESP = await HTTP.get('/users/my/stats');

      if (RESP.status !== 200) {
        return Promise.reject(
          // eslint-disable-next-line comma-dangle
          new Error('ERROR: Error while fetching user stats')
        );
      }

      const userStats = RESP.data?.result?.userStats ?? {};
      ctx.commit('setUserStats', userStats);
      return Promise.resolve(userStats);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Fetch Users stats Action')
      );
    }
  },
};

export { userActions };
export default userActions;
