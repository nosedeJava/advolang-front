import React, {useState} from "react";
import './Block.css';

export default function Block(props){

    const [flag, setFlag] = useState(true);

    function handleMouseOver(){
        setFlag(false);
    }

    function handleMouseOut(){
        setFlag(true);
    }

    return(
        <div
            className="mainPage-main"
            style={
                {
                    background: `url(${props.img}) center no-repeat`,
                    backgroundSize: 'cover'
                }
            }
        >
            <div
                className="mainPage-contenido"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                {flag && (
                    <h1>{props.title}</h1>
                )}
                {!flag && (
                    <div>
                        <h1>{props.title}</h1>
                        <p>{props.message}</p>
                    </div>
                )}
            </div>
        </div>
    )
}