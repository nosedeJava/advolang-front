import React from "react";
import './MainHeader.css';
import IconButton from "@material-ui/core/IconButton";
import {Facebook, Instagram, Twitter, YouTube} from "@material-ui/icons";

export default function MainHeader(){

    return(
        <div className="main-header">
            <img src="/logo/logo.ico" alt=""/>
            <h1>ADVOLANG</h1>
            <div className="icons">
                <IconButton>
                    <Facebook style={{color:'white'}}/>
                </IconButton>
                <IconButton>
                    <Instagram style={{color:'white'}}/>
                </IconButton>
                <IconButton>
                    <Twitter style={{color:'white'}}/>
                </IconButton>
                <IconButton>
                    <YouTube style={{color:'white'}}/>
                </IconButton>
            </div>
        </div>
    )
}