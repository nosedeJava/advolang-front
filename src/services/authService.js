class AuthService {
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.authenticated = !!user;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new AuthService();
