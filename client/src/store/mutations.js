/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
export default {
  // Mustations
  toggleAuth: (state) => {
    state.userLoggedIn = !state.userLoggedIn;
  },
  setUser: (state, payload) => {
    state.user = payload;
  },
  setTweets: (state, payload) => {
    state.tweets = payload;
  },
  setUserStats: (state, payload) => {
    state.userStats = payload;
  },
  setUsersICanFollow: (state, payload) => {
    state.usersICanFollow = payload;
  },
  userFollowed: (state, payload) => {
    const _usersICanFollow = [...state.usersICanFollow];
    const userIdx = _usersICanFollow.findIndex((u) => u.id === payload.userId);

    if (userIdx !== -1) {
      _usersICanFollow[userIdx] = {
        following: true,
        ..._usersICanFollow[userIdx],
      };
      // eslint-disable-next-line brace-style
    } else throw new Error('userFollowed mutation, user not found');

    state.usersICanFollow = _usersICanFollow;
  },
};
