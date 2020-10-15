const axios = require('axios').default;
const URL = 'https://advolang-back.herokuapp.com/api/auth';

class AuthService {
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.authenticated = !!user;
  }

  login(usr) {
    return axios.post(`${URL}/signin`, usr)
        .then(response =>
            response.data.token ? localStorage.setItem('user', JSON.stringify(response.data)): undefined
        ).then(() => this.authenticated = true);
  }

  signup(usr){
    return axios.post(`${URL}/signup`, usr)
        .then(response => response.status)
        .catch(error => {
          if (error.response){
            alert('Bad credentials')
            console.info(error.response.status);
            console.info(error.response.data);
          }else{
            alert('Server error');
            console.info(error.message);
          }
        })
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
