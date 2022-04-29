/* eslint-disable brace-style */
import JWT_DECOEDE from 'jwt-decode';
import HTTP from '@/services/index';

const authActions = {
  async login(ctx, payload) {
    try {
      const RES = await HTTP.post('/users/login', {
        email: payload.email,
        password: payload.password,
      });

      if (RES.status !== 200) {
        return Promise.reject(new Error('ERROR: Error while logging in'));
      }

      localStorage.setItem('token', RES.data.result.token);
      ctx.commit('toggleAuth');

      return Promise.resolve(RES.data);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Login Action')
      );
    }
  },
  async register(ctx, payload) {
    try {
      console.log('register 1');
      const RESP = await HTTP.post('/users/signup', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });

      console.log('register 2');
      if (RESP.status !== 200) {
        return Promise.reject(new Error('ERROR: Error while Signup'));
      }

      localStorage.setItem('token', RESP.data.result.token);
      ctx.commit('toggleAuth');

      return Promise.resolve(RESP.data);
    } catch (error) {
      return Promise.reject(
        // eslint-disable-next-line comma-dangle
        new Error('ERROR: Something went wrong in Signup Action')
      );
    }
  },
  async signout() {
    localStorage.removeItem('token');
    window.location.reload();
  },
  async init_login(ctx) {
    const token = localStorage.getItem('token');

    if (token !== null) {
      const userDecoded = JWT_DECOEDE(token);

      ctx.commit('toggleAuth');
      ctx.commit('setUser', userDecoded);
    }
  },
};

export { authActions };
export default authActions;
