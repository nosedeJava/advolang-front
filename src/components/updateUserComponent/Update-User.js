import React, {useEffect, useState} from "react";
import './UpdateUser.css';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import AuthService from "../../services/AuthService";
import AzureService from "../../services/AzureService";
import RequestService from "../../services/RequestService";

export default function UpdateUser(){

    const [user, setUser] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        RequestService.getUser()
            .then(response => setUser(response));
    }, [])

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    function handleFile(event){
        setFile(event.target.files[0]);
        setUser({...user, profileImage: event.target.files[0].name});
    }

    function updateUser(){
        AuthService.updateUser(user)
            .then(() => console.log("Ok"))
        AzureService.putFile(file.name, file, user.username)
            .then(response => console.log(response.status));
    }

    return(
        <div className="update-user-container">
            {user&& console.log(user)}
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
                <h2>Thumbnail view</h2>
                <div className="file-upload">
                    <input onChange={handleFile} type="file" id="update-file" accept="*/*" style={{display:'none'}}/>
                    <label htmlFor="update-file">
                        <IconButton color="primary" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                    {file && (
                        <p>{file.name}</p>
                    )}
                    {!file && (
                        <p>No file selected</p>
                    )}
                </div>

                <Button color={"secondary"} variant={"contained"} onClick={updateUser}>Update</Button>
            </div>
        </div>
    )
}