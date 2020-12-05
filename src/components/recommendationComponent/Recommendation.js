import React, {useEffect} from 'react';
import './Recommendation.css';
import { Grid, Box, Card, CardMedia, ButtonBase} from '@material-ui/core';
import ListCategories from './ListCategories'
import { useHistory } from "react-router-dom";
import {adaptJavaDate, calculatePublication} from '../Auxiliar/AuxiliarTools.js';
import {componentDidMountGet, componentDidMountGetAzure} from '../../services/Petitions.js';
import {redirectToSpecificRecom} from '../Auxiliar/Redirect';
import {Score} from './Score';
import {cylonLoading} from '../loadingComponent/Loading';

function Recommendation(props) {

  let history = useHistory();

  /* Load values */
  const[loadScoresList, setLoadScoresList] = React.useState(false);
  const[loadThumb, setLoadThumb] = React.useState(false);

  /* Petitions values */
  const[recomThumb, setRecomThumb] = React.useState("/img/default.png");
  const[scoresList, setScoresList] = React.useState([]);


  const componentDidMount = () => {
    if (props.recom.thumbnail !== "/img/default.png") {
      componentDidMountGetAzure(setLoadThumb, setRecomThumb, props.recom.thumbnail, props.recom.creator);
    }
    componentDidMountGet(setLoadScoresList, setScoresList, '/api/scores/values/' + props.recom.id);
  }

  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);

  const handleRedirectSpecific = () => {
    redirectToSpecificRecom(props.recom.language, props.recom.creator, props.recom.id, history)
  }

  if (loadThumb || loadScoresList) {
    return (
      <div  className="divLoad">
        {cylonLoading()}
      </div>
    );
  }

  return (
      <Grid container className="recommendationContainer">
        <Grid item xs={1} />
        <Grid container spacing={0} direction="column" className="mainGridContainer" >
          <Box className="recommendationBox" >

            <Grid container className="cardInfoGrid">

              <ButtonBase  className="specificCard" onClick={handleRedirectSpecific}>
                <Grid item xs={2} className="imageGrid" container spacing={0} direction="column">
                  <Card className="thumbnailSpace">
                    <CardMedia
                        component="img"
                        image={recomThumb}
                    />
                  </Card>
                </Grid>

                <Grid item xs={9} className="topGrid" >

                  <Grid container className="topGridContainer" >

                    <Grid item className="titleGridValue">
                      <Box className="titleBoxValue" textAlign="left">
                          {props.recom.title}
                      </Box>
                    </Grid>

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
                  <Score scoresList={scoresList} />
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
                  {<ListCategories  content={props.recom.categories} />}
                </Box>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>
  );
}

export default Recommendation;
