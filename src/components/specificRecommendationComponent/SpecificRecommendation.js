import React from 'react';
import { Grid, Box, Typography, Button, Avatar, Divider } from '@material-ui/core';
import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';
import ListCategories from '../recommendationComponent/ListCategories';
import {ResourceController} from './ResourceController.js';
import './SpecificRecommendation.css';
import {calcProm, calculatePublication} from '../Auxiliar/AuxiliarTools.js';
import {recommendations} from '../Auxiliar/Data.js';
import {CheckValidYoutubeURL, CheckMimeType} from '../Auxiliar/CheckMedia.js';
import Container from '@material-ui/core/Container';

function SpecificRecommendation() {

  let current_id=localStorage.getItem('recommendation-id');
  let currentRecom = recommendations.filter(recom => recom.id == current_id)[0];

  const [totalScore, setTotalScore] = React.useState(calcProm(currentRecom.list_score));
  const [firstVoting, setFirstVoting] = React.useState(true);

  let colorScore = totalScore > 3.8 ? "#418525" : totalScore < 2.8 ? "#C77938" : "#C7B117";

  const handleRating = (value) =>{

    if(firstVoting){
      setFirstVoting(false);
    }
    else{
      currentRecom.list_score.pop();
    }

    currentRecom.list_score.push(value);

    let prom=calcProm(currentRecom.list_score);
    setTotalScore(prom);
    /*Cambiar valores en la bd*/

  }
  function callback(bool){
    alert(bool)
    //continúa
  }

  const handleSave = () =>{
    alert("Successfully saved")
    alert(CheckMimeType("PP.txt"))
    CheckValidYoutubeURL("https://www.youtube.com/watch?v=BjC0KUxiMhc", callback);


  }




  return (
    <div className="specificRecommendationDiv">
      <Grid container id="specificRecommendation" className="specificRecommendationGrid" spacing={0} direction="row" >
        <Grid item className="gridPostContainer">
          <Box boxShadow={3} borderRadius="borderRadius" className="postBoxClass" >

            <Grid container className="headerRecomGrid" >

              {/* Uso de la imagen relacionada a la recomendación. */}
              <Grid item className="imageRecomGrid">
                <div className="imageRecomDiv">
                  <Avatar variant="square" alt="Remy Sharp" src={currentRecom.sourceImage} style={{ height: 'auto', width: 'auto', backgroundColor: "white" }} />
                </div>
              </Grid>

              <Grid item className="infoRecomGrid">
                <Grid container className="infoRecomGridContainer">

                  {/*Uso del titulo de la recomendación. */}
                  <Grid item className="recomTitleGrid">
                    <Box className="recomTitleBox">
                      {currentRecom.title}
                    </Box>
                  </Grid>

                  {/* Uso de la fecha de publicación. */}


                    <Grid item className="recomDateGrid">
                      <Box className="recomDateBox">
                          {calculatePublication(currentRecom.time)}
                      </Box>
                    </Grid>

                    {/* Rating de la publicación. */}
                    <Grid item className="recomRaitingItemGrid">

                      <Grid container className="recomRaitingItemContainer" >

                        <Grid item >
                          <Box className="ratingGrid">
                            <HoverRating className="hooverRating" startValues={totalScore} selectedMatch={handleRating} />
                          </Box>
                        </Grid>

                        {/* Uso del score asociado a la recomendación. */}
                        <Grid item className="recomScoreGrid">
                          <Box borderRadius="50%" className="scoreBox" style={{ backgroundColor: colorScore }}>
                            <Typography className="scoreFont" >
                              {totalScore}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Uso de la descripción dada a una recomendación en especifico. */}
              <Grid item className="recomDescription">
                <Box borderRadius="borderRadius" className="descripBoxClass">
                  {currentRecom.description}
                </Box>
              </Grid>
            </Grid>



            {/* Uso del enlace relacionado a la recomendación.*/}
            <Grid item className="recomRecourseGrid">
              <Box className="recomRecourseBox" align="center">
                <ResourceController resources={currentRecom.resources}/>
              </Box>

            </Grid>



            <Grid item >
              <Box className="footerPostBox" >
                <Grid container className="footerPostContainer" direction="row" spacing={1}>
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                  </Grid>

                  <Grid item>
                    <FormDialog />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>


        <Grid item xs={4} direction="row" className="gridUserContainerMain">
          <Grid container spacing={0} direction="column" className="gridUserContainer">
            <Grid item className="userFirstGrid">
              <Box boxShadow={3} borderRadius="borderRadius" className="userConatainerBox" >
                <Grid container className="usersSubContainer" spacing={0} direction="column">

                  {/* Aquí uso el nombre de usuario y el enlace a la imagen de perfil.*/}
                  <Grid item className="userProfileGrid">
                    <div className="userImageDiv">
                      <Avatar variant="square" alt="Stinky" src="logo512.png" style={{ height: '100%', width: '100%' }} />
                    </div>
                  </Grid>

                  {/* Aquí uso el nombre de usuario*/}
                  <Grid item className="userNameGrid">
                    <Box className="userNameBox">
                      {currentRecom.user.name}
                    </Box>
                  </Grid>

                  <Divider className="divider" variant="middle"  />

                  {/*Descripción del usuario.*/}
                  <Grid className="userDescGrid">
                    <Box className="userDescBox">
                      {currentRecom.user.description}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Uso de las categorias asociadas a la recomendación.*/}
            <Grid item className="categoriesGrid">
              <Box className="categoriesBox">
                <ListCategories content={currentRecom.categories} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpecificRecommendation;
