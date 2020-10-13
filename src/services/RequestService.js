import AuthHeader from "./AuthHeader";

const axios = require('axios').default;
const urlBack = 'http://localhost:8080';

class RequestService{
    post(path, data) {
        return axios.post(`${urlBack}${path}`, data, {headers: AuthHeader()});
    }

    get(path) {
        return axios.get(urlBack + path, {headers: AuthHeader()});
    }

    patch(path, data) {
        return axios.put(urlBack + path, data, {headers: AuthHeader()});
    }

    delete(path) {
        return axios.delete(urlBack + path, {headers: AuthHeader()});
    }
}

export default new RequestService();