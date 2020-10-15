import React, {useEffect, useState} from "react";
import UserInformationService from "../../services/UserInformationService";
import './UpdateUser.css';
import TextField from "@material-ui/core/TextField";

export default function UpdateUser(){

    const [user, setUser] = useState(null);

    useEffect(() => {
        UserInformationService.getUser()
            .then(response => setUser(response));
    }, [])

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    return(
        <div className="update-user-container">
            <div className="update-user-card">
                <h1>Update your personal information</h1>
                <TextField
                    value={user?user.username:''}
                    label="Username"
                    fullWidth
                    name={'username'}
                    onChange={handleChange}
                />
                <TextField
                    value={user?user.fullName:''}
                    label="Full Name"
                    fullWidth
                    name={'fullName'}
                    onChange={handleChange}
                />
                <TextField
                    value={user?user.email:''}
                    label="email"
                    fullWidth
                    name={'email'}
                    onChange={handleChange}
                />
                <TextField
                    value={user?user.fullName:''}
                    label="Full Name"
                    fullWidth
                    name={'fullName'}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}