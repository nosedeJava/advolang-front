import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import auth from "./auth";
import theoryIcon from '../../../resources/img/theory-icon.svg';


export function Login (props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(userEmail){
    setEmail(userEmail.target.value);
  }

  function handlePasswd(userPasswd){
    setPassword(userPasswd.target.value);
  }

  function handleSubmit(){
    auth.login(() => {
      if(localStorage.getItem("email")===email && localStorage.getItem("passwd")===password){
        props.history.push("/");
      }
      else{
        alert("No estás registrado")
      }
    });

  }

  return (
    <React.Fragment>
      <header className="App-header">
        <h1 className="App-title">Task Planner</h1>
        <img src={theoryIcon} className="Human-features-logo" alt="logo"/>
      </header>

      <main className="layout" >
        <div className="paper" >
          <form className="form">

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Username</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value = {email}
                  onChange = {handleEmail}
                  autoFocus
                />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value = {password}
                  onChange = {handlePasswd}
                />
            </FormControl>

            <Box mx="auto" bgcolor="background.paper" p={0} marginTop="2%">

              <Button
                variant="outlined"
                color="primary"
                className="submit"
                onClick={handleSubmit}
              >
                LOGIN
              </Button>
            </Box>
            <br/>
          </form>
        </div>
        <div className="createAccDIv">
          <br />
          <Typography>
            <Link href="#" onClick="" color='blue'>
              <u>Create Account</u>
            </Link>
          </Typography>
        </div>
      </main>
    </React.Fragment>
  );
}
