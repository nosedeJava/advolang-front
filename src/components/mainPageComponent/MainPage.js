import React from "react";
import './MainPage.css';
import Button from "@material-ui/core/Button";
import { Send} from "@material-ui/icons";
import {useHistory} from 'react-router-dom';
import Copyright from "../signComponent/Copyright";

export default function MainPage(){

    const history = useHistory();

    function handleClick(){
        history.push('/login')
    }

    return(
        <div className="mainPage-container">
            <div className="header">
                <Button
                    variant={"contained"}
                    className="button"
                    endIcon={<Send style={{fontSize: 40}}/>}
                    onClick={handleClick}
                >
                    <h1>Start</h1>
                </Button>
            </div>
            <h1 className="title">What is Advolang?</h1>
            <div className="content">
                <p>
                    Advolang is a platform that aims to provide a comfortable interface, where those who want to learn a
                    language, can do so through content recommendations
                </p>
                <img src="/img/fourth.jpeg" alt=""/>
            </div>
            <hr/>
            <h1 className="title">A new way to enjoy learning</h1>
            <div className="content">
                <img src="/img/first.png" alt="no-image"/>
                <p>
                    Explore and discover great recommendations with you favorite language, have fun learning with images
                    and multimedia files
                </p>
            </div>
            <hr/>
            <h1 className="title">Help the community</h1>
            <div className="content">
                <p>
                    In Advolang, we encourage you to create your own content for spreading your knowledge and help the
                    community to learn a new language
                </p>
                <img src="/img/second.png" alt=""/>
            </div>
            <hr/>
            <h1 className="title">Need some money?</h1>
            <div className="content">
                <img src="/img/third.jpg" alt=""/>
                <p>
                    Win whit Advolang, you can gain some money publishing great recommendations, these will be rated
                    by other users and they can give you a commission for your work.
                </p>
            </div>
            <div className="footer">
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
        </div>
    )
}