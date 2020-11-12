import React from "react";
import './MainPage.css';
import Button from "@material-ui/core/Button";
import { Send} from "@material-ui/icons";
import {useHistory} from 'react-router-dom';

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
                <h2>
                    Advolang is a platform that aims to provide a comfortable interface, where those who want to learn a
                    language, can do so through content recommendations
                </h2>
                <img src="/img/fourth.jpeg" alt=""/>
            </div>
            <hr/>
            <h1 className="title">A new way to enjoy learning</h1>
            <div className="content">
                <img src="/img/first.jpg" alt="no-image"/>
                <h2>
                    Explore and discover great recommendations with you favorite language, have fun learning with images
                    and multimedia files
                </h2>
            </div>
            <hr/>
            <h1 className="title">Help the community</h1>
            <div className="content">
                <h2>
                    In Advolang, we encourage you to create your own content for spreading your knowledge and help the
                    community to learn a new language
                </h2>
                <img src="/img/second.png" alt=""/>
            </div>
            <hr/>
            <h1 className="title">Need some money?</h1>
            <div className="content">
                <img src="/img/third.jpg" alt=""/>
                <h2>
                    Win whit Advolang, you can gain some money publishing great recommendations, these will be rated
                    by other users and they can give you a commission for your work.
                </h2>
            </div>
        </div>
    )
}