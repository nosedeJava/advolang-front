import React from "react";
import './MainPage.css';
import Footer from "./Footer";
import Block from "./Block";
import Button from "@material-ui/core/Button";
import MainHeader from "./MainHeader";
import {useHistory} from "react-router-dom";

export default function MainPage(){

    const history = useHistory();

    function handleClick(){
        history.push('/login')
    }

    function handleRegister(){
        history.push('/signUp')
    }

    return(
        <div className="mainPage-container">
            <MainHeader/>
            <div className="cover-page">
                <h1>Learn the language that you want</h1>
                <img src="/img/libros.png" alt=""/>
                <div>
                    <Button className="cover-page-button" onClick={handleClick}>
                        Start now
                    </Button>
                    <Button className="cover-page-button" onClick={handleRegister}>
                        Register
                    </Button>
                </div>
            </div>
            <div className="mainPage-block">
                <Block
                    message={
                        "Advolang is a platform that aims to provide a comfortable interface, where those who want to learn a\n" +
                        "language, can do so through content recommendations"
                    }
                    title={"Who we are?"}
                    img={"/img/fourth.jpeg"}
                />
                <Block
                    message={
                        "Explore and discover great recommendations with you favorite language, have fun learning with images\n"+
                        "and multimedia files"
                    }
                    title={"A new way to enjoy learning"}
                    img={"/img/first.png"}
                />
            </div>
            <div className="mainPage-block">
                <Block
                    message={
                        "In Advolang, we encourage you to create your own content for spreading your knowledge and help the\n" +
                        "community to learn a new language"
                    }
                    title={"Help the community"}
                    img={"/img/second.png"}
                />
                <Block
                    message={
                        "Win whit Advolang, you can gain some money publishing great recommendations, these will be rated\n"+
                        "by other users and they can give you a commission for your work"
                    }
                    title={"Need some money?"}
                    img={"/img/third.jpg"}
                />
            </div>
            <div className="mainPage-block" style={{height: 'auto'}}>
                <h1 style={{width:'30%', textAlign:'center'}}>Don't waste your time any more!</h1>
                <img style={{margin:'20px 80px'}} src="/img/happy.jpg" alt="" width="100px" height="100px"/>
            </div>
            <Footer/>
        </div>
    )
}