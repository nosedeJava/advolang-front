import React from 'react';
import './TrendPost.css';
import { Grid, Box, ButtonBase} from '@material-ui/core';
import ReactHashtag from "react-hashtag";

export function TrendPost(props) {


  return (
    <ButtonBase  className="buttonBaseTrendPost">
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
