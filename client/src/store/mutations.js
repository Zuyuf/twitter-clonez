export default {
  // Mustations
  toggleAuth: (state) => {
    state.userLoggedIn = !state.userLoggedIn;
  },
  setUser: (state, payload) => {
    state.user = payload;
  },
};
