import React, {useState} from "react";
import './SignIn.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AuthService from "../../services/AuthService";

export default function SignIn(props){

    const [user, setUser] = useState(null);

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    function handleSubmit(){
        AuthService.login(user, props.history)
            .then(() => props.history.push('/'));

    }
    return(
        <div className="signIn-container">
            <div className="background-container">
                <div className="signIn-container">
                    <div className="image"/>
                    <div className="inputs">
                        <h1 style={{margin:'0'}}>Sign In</h1>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            onChange = {handleChange}
                            autoComplete="email"
                            style={{margin: '20px 0 0 0'}}
                        />
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange = {handleChange}
                            autoComplete="current-password"
                            style={{margin: '20px 0 0 0'}}
                        />
                        <Button
                            style={{margin: '20px 20px 0 20px'}}
                            variant={"contained"}
                            color={"primary"}
                            fullWidth
                            onClick={handleSubmit}
                        >
                            Sign in
                        </Button>
                    </div>
                </div>
                <div className="left-panel">
                    <h1>Don't have an account?</h1>
                    <Button
                        fullWidth
                        color='primary'
                        variant={"contained"}
                        onClick={() => props.history.push('/signup')}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}