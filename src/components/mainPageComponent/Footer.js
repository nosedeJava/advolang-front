import React from "react";
import Button from "@material-ui/core/Button";
import {Send} from "@material-ui/icons";
import Copyright from "../signComponent/Copyright";
import './Footer.css'
import {useHistory} from "react-router-dom";

export default function Footer(){

    const history = useHistory();

    function handleClick(){
        history.push('/login')
    }

    return(
        <div className="main-page-footer">
            <div className='information'>
                <div className='brand'>
                    <img src="/logo/logo.png" alt=""/>
                </div>
                <div className='contact-us'>
                    <h1 style={{color:'white', fontSize:'20px'}}>CONTACT US:</h1>
                    <hr style={{width:'100%', margin: 0}}/>
                    <ul>
                        <li>natalia.duran@mail.escuelaing.edu.co</li>
                        <li>jeymar.vega@mail.escuelaing.edu.co</li>
                        <li>michael.preciado@mail.escuelaing.edu.co</li>
                        <li>miguel.rivera-r@mail.escuelaing.edu.co</li>
                    </ul>
                    <hr style={{width:'100%', margin: 0}}/>
                </div>
                <div className='get-start'>
                    <h1 style={{color:'white', fontSize:'20px'}}>GET START</h1>
                    <Button
                        variant={"contained"}
                        className='but'
                        endIcon={<Send style={{fontSize: 40}}/>}
                        onClick={handleClick}
                    >
                        <h1>Start</h1>
                    </Button>
                </div>
            </div>
            <hr style={{width: '100%'}}/>
            <Copyright/>
        </div>
    )
}