import React from "react";
import './MainPage.css';
import Footer from "./Footer";

export default function MainPage(){

    return(
        <div className="mainPage-container">
            <div className="cover-page">
                <h1>Don't waste your time!</h1>
            </div>
            <div className="mainPage-block">
                <div className="mainPage-content">
                    <img src="/img/fourth.jpeg" alt=""/>
                </div>
                <div className="mainPage-content">
                    <h1>Who we are?</h1>
                    <p>
                        Advolang is a platform that aims to provide a comfortable interface, where those who want to learn a
                        language, can do so through content recommendations
                    </p>
                </div>
            </div>
            <div className="mainPage-block">
                <div className="mainPage-content">
                    <h1>A new way to enjoy learning</h1>
                    <p>
                        Explore and discover great recommendations with you favorite language, have fun learning with images
                        and multimedia files
                    </p>
                </div>
                <div className="mainPage-content">
                    <img src="/img/first.png" alt=""/>
                </div>
            </div>
            <div className="mainPage-block">
                <div className="mainPage-content">
                    <img src="/img/second.png" alt=""/>
                </div>
                <div className="mainPage-content">
                    <h1>Help the community</h1>
                    <p>
                        In Advolang, we encourage you to create your own content for spreading your knowledge and help the
                        community to learn a new language
                    </p>
                </div>
            </div>
            <div className="mainPage-block">
                <div className="mainPage-content">
                    <h1>Need some money?</h1>
                    <p>
                        Win whit Advolang, you can gain some money publishing great recommendations, these will be rated
                        by other users and they can give you a commission for your work.
                    </p>
                </div>
                <div className="mainPage-content">
                    <img src="/img/third.jpg" alt=""/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}