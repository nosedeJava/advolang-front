import React, {useEffect} from 'react';
import './Recommendation.css';
import { Grid, Box, Card, CardMedia, Typography, ButtonBase} from '@material-ui/core';
import ListCategories from './ListCategories'
import { useHistory } from "react-router-dom";
import {calcProm, adaptJavaDate, calculatePublication, getRecommendationScores, getRecommendationScoreColor} from '../Auxiliar/AuxiliarTools.js';
import {componentDidMountGetAzure} from '../Auxiliar/Petitions.js';


function Recommendation(props) {

  let history = useHistory();
  let recomScoreList = getRecommendationScores(props.recom.id);

  let recomScoreListSize = recomScoreList.length;
  let score = recomScoreListSize !== 0 ? calcProm(recomScoreList) : 0.0;
  let colorScore = recomScoreListSize === 0 ? "gray" : getRecommendationScoreColor(score);

  const[loadThumb, setLoadThumb] = React.useState(false);

  const setRecomThumb = (newThumbValue) => {
    props.recom.thumbnail = newThumbValue;
  }

  const loadPetitions = () => {
    if (props.recom.thumbnail !== "/img/default.png") {
      componentDidMountGetAzure(setLoadThumb, setRecomThumb, props.recom.thumbnail);
    }
  }

  useEffect(() => {
      loadPetitions();
      window.scrollTo(0, 0);
  }, []);

  const handleRedirectSpecific = () => {
    localStorage.setItem("specific-current-recom", JSON.stringify(props.recom));
    localStorage.setItem("recommendation-id", props.recom.id);
    history.push(`/${props.recom.creator}/recommendations/${props.recom.id}`)
  }

  if (loadThumb) {
    return <h2>Loading...</h2>;
  }

  return (
      <Grid container>
        <Grid item xs={1} />
        <Grid container spacing={0} direction="column" className="mainGridContainer" >
          <Box className="recommendationBox" >

            <Grid container className="cardInfoGrid">

              <ButtonBase  className="specificCard" onClick={handleRedirectSpecific}  >

                <Grid item xs={2} className="generalClassImage" container spacing={0} direction="column">
                  <Card className="thumbnailSpace">
                    <CardMedia
                        component="img"
                        image={props.recom.thumbnail}
                    />
                  </Card>
                </Grid>

                <Grid item xs={9} className="generalClass">

                  <Grid item className="titleGridValue">
                    <Box className="titleBoxValue" textAlign="left">
                        {props.recom.title}
                    </Box>
                  </Grid>

                  <Grid container >

                    <Grid item className="levelGridValue" >
                      <Box className="levelBoxValue" textAlign="left">
                          {props.recom.level}
                      </Box>
                    </Grid>

                    <Grid item className="userNameGridValue">
                      <Box className="userNameBoxValue" textAlign="left">
                          {props.recom.creator}
                      </Box>
                    </Grid>

                  </Grid>

                </Grid>

                <Grid item className="scoreGridValue" >
                  <Box border={1} className="scoreBoxValue" style={{ backgroundColor: colorScore }}>
                    <Typography className="generalClass3" align="center" >
                      {score}
                    </Typography>
                  </Box>
                </Grid>

              </ButtonBase>

            </Grid>

            <Grid item className="timeGridValue">
              <Box className="timeGridBox" textAlign="right">

                  {calculatePublication(adaptJavaDate(props.recom.creationDate))}
              </Box>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Box className="categoriesStyle">

                </Box>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>
  );
}

export default Recommendation;
