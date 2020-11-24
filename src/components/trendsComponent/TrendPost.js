import React from 'react';
import './TrendPost.css';
import { useHistory } from "react-router-dom";
import { Grid, Box, ButtonBase} from '@material-ui/core';
import ReactHashtag from "react-hashtag";
import {redirectToSpecificRecom} from '../Auxiliar/Redirect';

export function TrendPost(props) {

  let history = useHistory();

  const handleRecomRedirect = () => {
    redirectToSpecificRecom(props.trend.language, props.trend.creator, props.trend.id, history);
  }

  return (
    <ButtonBase className="buttonBaseTrendPost" onClick={handleRecomRedirect} >
      <Grid container spacing={0} direction="column" className="trendPostContainer">

        <Grid item className="trendLanguageLevel">
          <ReactHashtag>
            {props.trend.level + ' #'+ props.trend.language}
          </ReactHashtag>

        </Grid>
        <Grid item className="trendTittle">

          <Box className="trendTittleBox" >
            {props.trend.title}
          </Box>

        </Grid>

      </Grid>
    </ButtonBase>

  );
}
