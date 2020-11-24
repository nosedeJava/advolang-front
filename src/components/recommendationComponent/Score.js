import React, { useEffect } from 'react';
import './Score.css';
import { Grid, Box, Typography} from '@material-ui/core';
import {calcProm, adaptJavaDate, calculatePublication, getRecommendationScores, getRecommendationScoreColor} from '../Auxiliar/AuxiliarTools.js';

export function Score(props){
  return (

    <Grid item className="scoreGridValue" >
      <Box className="scoreBoxValue" style={{ background:  getRecommendationScoreColor(calcProm(props.scoresList)) }}>
        <div className="scoreTypographyDiv">
          <Typography className="scoreTypography" align="center" style={{fontWeight: 500, fontSize: "1.2vw"}} >
            {calcProm(props.scoresList)}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
}
