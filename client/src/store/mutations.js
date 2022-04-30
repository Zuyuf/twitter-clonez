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
};
