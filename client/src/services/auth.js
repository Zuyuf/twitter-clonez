export const Account = {
  getJWT() {
    return (
      localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? null
    );
  },
};

export default Account;
