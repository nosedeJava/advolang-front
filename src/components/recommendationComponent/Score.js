import React from 'react';
import './Score.css';
import {Box, Typography} from '@material-ui/core';
import {calcProm, getRecommendationScoreColor} from '../Auxiliar/AuxiliarTools.js';

export function Score(props){
  return (
    <Box className="scoreBoxValue" style={{ background:  getRecommendationScoreColor(calcProm(props.scoresList)) }}>
      <div className="scoreTypographyDiv">
        <Typography className="scoreTypography" align="center" style={{fontWeight: 500, fontSize: "1.2vw"}} >
          {calcProm(props.scoresList)}
        </Typography>
      </div>
    </Box>
  );
}
