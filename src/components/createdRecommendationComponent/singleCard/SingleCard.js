import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import React from "react";
import "./SingleCard.css";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit} from "@material-ui/icons";

export default function SingleCard(props){
    return(
        <Card variant={"outlined"} className="my-recommendation-card">
            <CardActionArea>
                <div className="recommendation">
                    <h1>{props.recommendation.title}</h1>
                    <img src={props.recommendation.sourceImage} alt=""/>
                </div>
            </CardActionArea>
            <div className="footer">
                <IconButton color={"primary"}>
                    <Edit/>
                </IconButton>
                <IconButton color={"secondary"}>
                    <Delete/>
                </IconButton>
            </div>
        </Card>
    )
}