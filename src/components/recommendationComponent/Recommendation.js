import React from 'react';
import { Grid, Box, Card, CardMedia, Typography, ButtonBase} from '@material-ui/core';
import ListCategories from './ListCategories'
import './Recommendation.css';
import { useHistory } from "react-router-dom";
import {calcProm, calculatePublication} from '../Auxiliar/AuxiliarTools.js';



function Recommendation(props) {
  let history = useHistory();

  let score=calcProm(props.list_score);
  let colorScore = score > 3.8 ? "#418525" : score < 2.8 ? "#C77938" : "#C7B117";

  const handleRedirectSpecific = () => {
    localStorage.setItem("recommendation-id", props.id)
    history.push("/specific-recommendation")
  }

  return (
    <Grid container>
      <Grid item xs={1} ></Grid>
        <Grid container spacing={0} direction="column" className="mainGridContainer" >
          <Box className="recommendationBox" >

            <Grid container className="cardInfoGrid">

              <ButtonBase  className="specificCard" onClick={handleRedirectSpecific}  >

                <Grid item xs={2} className="generalClassImage">
                  <Card className="thumbnailSpace">
                    <CardMedia
                      component="img"
                      image={props.sourceImage}

                    />
                    </Card>
                </Grid>

                <Grid item xs={9} className="generalClass">

                  <Grid item xs={12} >
                    <Box textAlign="left">
                      <Typography className="generalClass4" >
                        {props.title}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid container >

                    <Grid item xs={4}>
                      <Box textAlign="left">
                        <Typography className="generalClass5">
                          {props.user.name}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      <Box textAlign="left">
                        <Typography className="generalClass5">
                          {props.level}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      <Box textAlign="right">
                        <Typography className="generalClass5">
                          {calculatePublication(props.time)}
                        </Typography>
                      </Box>
                    </Grid>

                  </Grid>

                </Grid>

                <Grid  item xs={1} className="gridScoreStyle" >
                  <Box border={1} className="boxScoreStyle" style={{ backgroundColor: colorScore, }}>
                    <Typography className="generalClass3" align="center" >
                      {score}
                    </Typography>
                  </Box>
                </Grid>

              </ButtonBase>

            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Box className="categoriesStyle">
                  <ListCategories content={props.categories} />
                </Box>
              </Grid>
            </Grid>

          </Box>
      </Grid>
    </Grid>
  );
}

export default Recommendation;
