import RequestService from "./RequestService";

class UserInformationService{
    getUser(){
        const username = JSON.parse(localStorage.getItem('user')).id;
        return RequestService.get(`/api/users/${username}`)
            .then(response => response.data);
    }

    getUsername(){
        const username = JSON.parse(localStorage.getItem('user')).id;
        return RequestService.get(`/api/users/${username}`)
            .then(response => response.data.username);
    }
}

export default new UserInformationService();