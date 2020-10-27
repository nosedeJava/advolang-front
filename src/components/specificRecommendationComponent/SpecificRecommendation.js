import React, { useEffect } from 'react';
import './SpecificRecommendation.css';
import { Grid, Box, Typography, Button, Avatar, Divider, ButtonBase } from '@material-ui/core';
import {useParams} from "react-router-dom";

import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';
import ListCategories from '../recommendationComponent/ListCategories';
import {ResourceController} from './ResourceController.js';
import {calcProm, getRecommendationScoreColor, adaptJavaDate, calculatePublication} from '../Auxiliar/AuxiliarTools.js';
import {savedRecommendationsList} from '../Auxiliar/Data.js';
import {CheckValidYoutubeURL, CheckMimeType} from '../Auxiliar/CheckMedia.js';
import {ShowSuccessMessage, ShowWarningMessage} from '../Auxiliar/Swal.js';
import { useHistory } from "react-router-dom";
import {componentDidMountListGet, componentDidMountGetWithAzureAfter, componentDidMountPost} from '../../services/Petitions.js';
import {getLocalStorageObject} from '../Auxiliar/ObjectTools.js';

function SpecificRecommendation(props) {

  let history = useHistory();
  const params = useParams();

  /* Parámetros de petición */
  let lang = params.recomLang;
  let current_id = params.recomid;
  let creator_current_recom_username = params.user;

  /* Usuario de la sesión*/
  let currentUser =  getLocalStorageObject('user');


  /* Load de peticiones*/
  const [loadingCurrentRecom, setLoadingCurrentRecom] = React.useState(true);
  const [loadingScorePost, setLoadingScorePost] = React.useState(false);
  const [loadingAllScoresValue, setloadingAllScoresValue] = React.useState(false);
  const [loadingCreator_current_recom_object, setLoadingCreator_current_recom_object] = React.useState(false);
  const [loadCompleteThumb, setLoadCompleteThumb] = React.useState(false);

  /* Valores de peticiones */
  const [currentRecom, setCurrentRecom] = React.useState({});
  const [scoreObject, setScoreObject] = React.useState(null);
  const [allTotalScore, setAllTotalScore] = React.useState([]);
  const [creator_current_recom_object, setCreator_current_recom_object] = React.useState([]);
  const [thumb, setThumb] = React.useState("/img/default.png");


  const url_petitions_list = [
    {
      url: '/api/'+lang+'/recommendations/'+current_id,
      setConst: setCurrentRecom,
      loadingConst: setLoadingCurrentRecom
    },
    {
      url: '/api/scores/values/' + currentUser.type + '/' + current_id,
      setConst: setScoreObject,
      loadingConst: setLoadingScorePost
    },
    {
      url: '/api/scores/values/' + current_id,
      setConst: setAllTotalScore,
      loadingConst: setloadingAllScoresValue
    },
    {
      url: '/api/users/' + creator_current_recom_username,
      setConst: setCreator_current_recom_object,
      loadingConst: setLoadingCreator_current_recom_object
    }
  ]

  const componentDidMount = () => {
    componentDidMountListGet(url_petitions_list);
    componentDidMountGetWithAzureAfter(setLoadCompleteThumb, setThumb, '/api/'+ lang +'/recommendations/'+ current_id + '/thumbnail');
  }

  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);


  const afterScorePost = () => {
    componentDidMountListGet(url_petitions_list.slice(1, 3));

    ShowSuccessMessage("Awesome", "Successfully score post")
  }

  const afterScoreUpdate = (data) => {
    setAllTotalScore(data)
    ShowSuccessMessage("Awesome", "Successfully score update")
  }

  const handleRating = (value) =>{
    if(scoreObject === "") {
      let newScore = {
        userId : currentUser.type,
        recommendationId : current_id,
        value : value
      }

      componentDidMountPost(setLoadingScorePost, afterScorePost, '/api/scores/add', newScore)

    }
    else{
      scoreObject.value = value;
      componentDidMountPost(setLoadingScorePost, afterScoreUpdate, '/api/scores/value/update', scoreObject)
    }

  }

  function callback(bool){
    alert(bool)
    //continúa
  }

  const handleSave = () =>{

    let existingSavedRecom = savedRecommendationsList.filter(recom => recom.id === currentRecom.id);

    if(existingSavedRecom.length !== 0){
      ShowWarningMessage("Warning", "This recommendation is already saved")
          .then(() => console.log("Done"))
    }
    else{
      savedRecommendationsList.push(JSON.stringify(currentRecom))
      ShowSuccessMessage("Awesome", "Recommendation successfully saved")
          .then(() => console.log("Done"))
    }
  }

  const handleSpecificUser = () => {
    history.push("/specific-user")
    //redirigir a specific user

  }

  const typesRec = () =>{
    alert(CheckMimeType("PP.txt"))
    CheckValidYoutubeURL("https://www.youtube.com/watch?v=BjC0KUxiMhc", callback);
  }

  if (loadingCurrentRecom || loadingScorePost || loadingAllScoresValue || loadingCreator_current_recom_object || loadCompleteThumb ) {
    return <h2>Loading...</h2>;
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
                  <Avatar variant="square" alt="Remy Sharp" src={thumb} style={{ height: 'auto', width: 'auto', backgroundColor: "white" }} />
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
                        {calculatePublication(adaptJavaDate(currentRecom.creationDate))}
                      </Box>
                    </Grid>

                    {/* Rating de la publicación. */}
                    <Grid item className="recomRaitingItemGrid">

                      <Grid container className="recomRaitingItemContainer" >

                        <Grid item >
                          <Box className="ratingGrid">
                            <HoverRating className="hooverRating" startValues={calcProm(allTotalScore)} selectedMatch={handleRating} />
                          </Box>
                        </Grid>

                        {/* Uso del score asociado a la recomendación. */}
                        <Grid item className="recomScoreGrid">
                          <Box borderRadius="50%" className="scoreBox" style={{ backgroundColor: getRecommendationScoreColor(calcProm(allTotalScore)) }}>
                            <Typography className="scoreFont" >
                              {calcProm(allTotalScore)}
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
                <ResourceController resource={currentRecom.resource}/>
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
              <ButtonBase className="specificUserButtonBase" onClick={handleSpecificUser}>
                <Box boxShadow={3} borderRadius="borderRadius" className="userConatainerBox" >
                  <Grid container className="usersSubContainer" spacing={0} direction="column">

                    {/* Aquí uso el nombre de usuario y el enlace a la imagen de perfil.*/}
                    <Grid item className="userProfileGrid">
                      <div className="userImageDiv">
                        <Avatar variant="square" alt="Stinky" src={creator_current_recom_object.profileImage} style={{ height: '100%', width: '100%' }} />
                      </div>
                    </Grid>

                    {/* Aquí uso el nombre de usuario*/}
                    <Grid item className="userNameGrid">
                      <Box className="userNameBox">
                        {creator_current_recom_object.username}
                      </Box>
                    </Grid>

                    <Divider className="divider" variant="middle"  />

                    {/*Descripción del usuario.*/}
                    <Grid className="userDescGrid">
                      <Box className="userDescBox">
                        {creator_current_recom_object.description}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </ButtonBase>
            </Grid>

            {/* Uso de las categorias asociadas a la recomendación.*/}
            <Grid item className="categoriesGrid">
              <Box className="categoriesBox">
                {<ListCategories  content={currentRecom.categories} />}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpecificRecommendation;
