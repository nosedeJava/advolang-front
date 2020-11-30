import React, { useState, useEffect } from "react";
import "./SingleCard.css";
import { useHistory } from "react-router-dom";
import {Card, Box, CardActionArea} from "@material-ui/core";
import {componentDidMountGetAzure} from '../../../services/Petitions.js';
import {adaptJavaDate} from '../../Auxiliar/AuxiliarTools';
import {redirectToSpecificRecom} from '../../Auxiliar/Redirect';


export default function SingleCard(props){

  let history = useHistory();

  const [loadingRecomThumb, setLoadingRecomThumb] = useState(true);
  const [recomThumb, setRecomThumb] = useState({});

  const componentDidMount = () => {
    componentDidMountGetAzure(setLoadingRecomThumb, setRecomThumb, props.recommendation.thumbnail , props.recommendation.creator);
  }

  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);

  const handleRedirectSpecific = () => {
    redirectToSpecificRecom(props.recommendation.language, props.recommendation.creator, props.recommendation.id, history)
  }

  if (loadingRecomThumb) {
    return <h2> Loading ...</h2>
  }

  return(
    <Card className="createdRecomCard" onClick={handleRedirectSpecific} style={{backgroundColor:"black"}}>

      <Box class = "createdRecomDiv">
        <img alt="" src={recomThumb} className="createdRecomImage" />
      </Box>

      <CardActionArea>


      <Box className="createdRecomInfo">
        <div className="createdRecomTitle">
          {props.recommendation.title}
        </div>

        <div className="createdRecomDate">
          {adaptJavaDate(props.recommendation.creationDate)}
        </div>

      </Box>
    </CardActionArea>

    </Card>
  );
}
