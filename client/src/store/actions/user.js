/* eslint-disable no-underscore-dangle */
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
  async fetchUsersICanFollow(ctx) {
    try {
      const RESP = await HTTP.get('/users/users_i_can_follow');

      if (RESP.status !== 200) {
        return Promise.reject(
          // eslint-disable-next-line comma-dangle
          new Error('ERROR: Error while fetching user stats')
        );
      }

      const usersICanFollow = RESP.data?.result?.usersICanFollow ?? [];
      ctx.commit('setUsersICanFollow', usersICanFollow);
      return Promise.resolve(usersICanFollow);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Fetch Users stats Action')
      );
    }
  },
  async followUser(ctx, followUserId) {
    console.log('followUser', new Date());
    try {
      const RESP = await HTTP.post('/users/follow', { followUserId });

      if (RESP.status !== 200) {
        return Promise.reject(
          // eslint-disable-next-line comma-dangle
          new Error('ERROR: Error while following user')
        );
      }
      ctx.commit('userFollowed', { userId: followUserId });

      return Promise.resolve(RESP.data.result.connection ?? {});
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Follow User Action')
      );
    }
  },
};

export { userActions };
export default userActions;
