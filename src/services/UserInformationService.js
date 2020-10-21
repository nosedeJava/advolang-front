import RequestService from "./RequestService";

class UserInformationService{
    async getUser(){
        const username = JSON.parse(localStorage.getItem('user')).id;
        const response = await RequestService.get(`/api/users/${username}`);
        return response.data;
    }

    async getUsername(){
        const username = JSON.parse(localStorage.getItem('user'));
        if (username){
            const response = await RequestService.get(`/api/users/${username.id}`);
            return response.data.username;
        }
    }
}

export default new UserInformationService();