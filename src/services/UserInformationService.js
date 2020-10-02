import RequestService from "./RequestService";

class UserInformationService{
    getUser(){
        const username = JSON.parse(localStorage.getItem('user')).id;
        console.log(username);
        return RequestService.get(`/api/users/${username}`)
            .then(response => response.data);
    }
}

export default new UserInformationService();