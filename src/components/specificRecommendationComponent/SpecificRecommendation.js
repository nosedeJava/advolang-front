import React, { useEffect } from 'react';
import './SpecificRecommendation.css';
import { Grid, Box, Button, Avatar, Divider, ButtonBase } from '@material-ui/core';
import {useParams} from "react-router-dom";
import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';
import ListCategories from '../recommendationComponent/ListCategories';
import {ResourceController} from './ResourceController.js';
import {calcProm, adaptJavaDate, calculatePublication} from '../Auxiliar/AuxiliarTools.js';
import {ShowSuccessMessage, ShowWarningMessage} from '../Auxiliar/Swal.js';
import { useHistory } from "react-router-dom";
import {componentDidMountListGet, componentDidMountPost, userInfoAzure, recomInfoAzure} from '../../services/Petitions.js';
import {getLocalStorageObject} from '../Auxiliar/ObjectTools.js';
import RequestService from "../../services/RequestService";
import Swal from 'sweetalert2';
import {DefaultLoading} from '../loadingComponent/Loading';
import {Score} from '../recommendationComponent/Score';

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

  /* Valores de peticiones */
  const [currentRecom, setCurrentRecom] = React.useState({});
  const [thumb, setThumb] = React.useState("/img/default.png");
  const [recObject, setRecObject] = React.useState({});

  const [scoreObject, setScoreObject] = React.useState(null);
  const [allTotalScore, setAllTotalScore] = React.useState([]);
  const [creator_current_recom_object, setCreator_current_recom_object] = React.useState([]);
  const [userProfile, setUserProfile] = React.useState();

  const url_petitions_list = [

    {
      url: '/api/scores/values/' + currentUser.type + '/' + current_id,
      setConst: setScoreObject,
      loadingConst: setLoadingScorePost
    },
    {
      url: '/api/scores/values/' + current_id,
      setConst: setAllTotalScore,
      loadingConst: setloadingAllScoresValue
    }
  ]

  const componentDidMount = async () => {
    recomInfoAzure(setLoadingCurrentRecom, setCurrentRecom, '/api/'+lang+'/recommendations/'+current_id,setThumb, setRecObject);
    componentDidMountListGet(url_petitions_list);
    userInfoAzure(setLoadingCreator_current_recom_object, setCreator_current_recom_object, '/api/users/' + creator_current_recom_username, setUserProfile);
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


  const handleSave = async () =>{
    // Confirmation
    let existingSavedRecom = await RequestService.get("/api/users/"+ currentUser.id + "/saved-recommendations/" + current_id);

    if(existingSavedRecom.data){
      Swal.fire({
        title: "Warning",
        text: "This recommendation is already saved",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Unsave',
      }).then(async (result) => {
          if (result.isConfirmed) {
            await RequestService.delete("/api/users/"+ currentUser.id + "/saved-recommendations?recommendationId=" + current_id);
            Swal.fire('Successfully unsaved', '', 'success')
          }

      })
    }
    else{
      await RequestService.post("/api/users/" + currentUser.id + "/saved-recommendations?recommendationId=" + current_id);
      ShowSuccessMessage("Awesome", "Recommendation successfully saved")
          .then(() => console.log("Done"))
    }
  }

  const handleSpecificUser = () => {
    history.push("/users/"+creator_current_recom_username)

  }


  if (loadingCurrentRecom || loadingScorePost || loadingAllScoresValue || loadingCreator_current_recom_object  ) {
    return <DefaultLoading isActive={true} />
  }

  return (
    <div className="specificRecommendationDiv">
      <Grid container id="specificRecommendation" className="specificRecommendationGrid" spacing={0} direction="row" >
        <Grid item className="gridPostContainer">
          <Box boxShadow={3} className="postBoxClass" >

            <Grid container className="headerRecomGrid" spacing={5} direction="column" >

              <Grid item className="topRecomItem">

                <Grid container className="topRecomItemGridFirstTop" direction="row">

                  {/* Uso de la imagen relacionada a la recomendación. */}
                  <Grid item className="imageRecomGrid">
                    <div className="imageRecomDiv">
                      <Avatar variant="square" alt="post image" src={thumb} style={{ height: 'auto', width: 'auto', backgroundColor: "white" }} />
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

                        <Grid container direction="row" className="recomRaitingItemContainer" >

                          <Grid item className="hooverStarScoreGrid">
                            <Box className="hooverRatingBox">
                              <HoverRating className="hooverRating" startValues={calcProm(allTotalScore)} selectedMatch={handleRating} />
                            </Box>
                          </Grid>

                            {/* Uso del score asociado a la recomendación. */}
                          <Grid item className="recomScoreGrid">
                            <Box className="scoreBox">
                              <Score scoresList={allTotalScore}/>
                            </Box>
                          </Grid>

                        </Grid>

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
            {/* Uso del enlace relacionado a la recomendación.*/}
            <Grid item className="recomRecourseGrid">
              <Box className="recomRecourseBox" align="center">
                <ResourceController resource={recObject} resourceType = {currentRecom.resourceType} postImage={thumb} />
              </Box>
            </Grid>

          </Grid>

          </Box>
          <Box className="recomFooterGeneralPost">
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
          </Box>
        </Grid>


        {/* Usuario creador*/}
        <Grid item className="gridUserContainerMain" align = "center" justify = "center" alignItems = "center">

          <Grid container spacing={0} direction="column" className="gridUserContainer">

            <Grid item className="userFirstGrid">
              <ButtonBase className="specificUserButtonBase" onClick={handleSpecificUser}>

                <Box boxShadow={3} borderRadius="borderRadius" className="userConatainerBox" >

                  <Grid container className="usersSubContainer" spacing={0} direction="column" align = "center" justify = "center" alignItems = "center">

                    {/* Aquí uso el nombre de usuario y el enlace a la imagen de perfil.*/}
                    <Grid item className="userProfileGrid" align = "center" justify = "center" alignItems = "center">
                      <div className="userImageDiv">
                        <Avatar variant="square" alt={creator_current_recom_object.username} src={userProfile} style={{ height: 'auto', width: 'auto' }} />
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
            <br />

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
