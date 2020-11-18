import React from "react";
import Copyright from "../signComponent/Copyright";
import './Footer.css'
import {useHistory} from "react-router-dom";

export default function Footer(){

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
            </div>
            <hr style={{width: '100%'}}/>
            <Copyright/>
        </div>
    )
}