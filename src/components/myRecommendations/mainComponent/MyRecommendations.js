import React from "react";
import "./MyRecommendations.css";
import SingleCard from "../singleCard/SingleCard";
import {recommendations} from "../../Auxiliar/Data";

export default function MyRecommendations(){
    return(
        <div className="my-recommendations-container">
            <div className="my-recommendations">
                {recommendations.map((recommendation, index) => (
                    <SingleCard key={index} recommendation={recommendation}/>
                ))}
            </div>
        </div>
    )
}