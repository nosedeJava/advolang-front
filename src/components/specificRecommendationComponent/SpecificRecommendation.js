import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography, Button, Avatar } from '@material-ui/core';
import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';
import ListCategories from '../recommendationComponent/ListCategories';
import {ResourceController} from './ResourceController.js';
import './SpecificRecommendation.css';

const useStyles = makeStyles({
    boxClass: {
        margin: "0.7rem",
        padding: '0.5rem',
        backgroundColor: "#242847",
    },
    thumbnailSpace: {
        maxWidth: "7rem",
        maxHeight: "4rem",
    },
    fontFamilyTitle: {
        color: "#B3B8E0",
        fontSize: "1.4rem",
        fontFamily: "Verdana",
    },
    fontFamilyText: {
        fontSize: "1rem",
        fontFamily: "Verdana",
        color: "#B3B8E0",
    },
    score: {
        backgroundColor: "green",
        height: "2rem",
        width: "2rem",
    },
    scoreFont: {
        fontSize: "0.9rem",
        fontFamily: "Verdana",
        color: "white",
        paddingTop: "0.3rem",
    },
    descriptionFont: {
        textJustify: "start",
        fontSize: "1rem",
        fontFamily: "Verdana",
        color: "#B3B8E0",
    },
    avatarSize: {
        width: "7rem",
        height: "7rem",
    },
    divider: {
        width: "400px",
        borderTop: "1px solid #f8f8f8",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
    profileBox: {
        margin: "0.7rem",
        padding: '0.5rem',
        width: "auto",
        backgroundColor: "#242847",
        color: "#B3B8E0",
    },
    categoriesBox: {
        margin: "0.7rem",
        padding: '0.5rem',
        backgroundColor: "#B3B8E0",
    }
});


const recommendations = [
    {
        id: 1,
        title: "Gameplay FFVII remake GPB no-sub",
        score: "4.8",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Stinky",
          description: "Prueba de usuario"
        },
        time: "2001-11-11 13:23:44",
        categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"],
        list_score: [4.9, 4.7, 4.9, 4.8, 5.0]
    },
    {
        id: 2,
        title: "The last samurai analysis on YouTube",
        score: "3.2",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Urobs",
          description: "Prueba de usuario"
        },
        time: "2002-11-11 13:23:44",
        categories: ["youtube", "analysis", "movie", "japan"],
        list_score: [2.9, 4.7, 4.9, 1.8, 1.0]

    },
    {
        id: 3,
        title: "Gameplay FFVII remake GPB no-sub",
        score: "2.0",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Stinky",
          description: "Prueba de usuario"
        },
        time: "2003-11-11 13:23:44",
        categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"],
        list_score: [4.9, 1.7, 4.9, 4.8, 4.8]
    },
    {
        id: 4,
        title: "Gameplay FFVII remake GPB no-sub",
        score: "4.8",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Stinky",
          description: "Prueba de usuario"
        },
        time: "2004-11-11 13:23:44",
        categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"],
        list_score: [4.9, 1.7, 4.9, 4.8, 0.5]
    },
    {
        id: 5,
        title: "The last samurai analysis on YouTube",
        score: "3.2",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Urobs",
          description: "Prueba de usuario"
        },
        time: "2005-11-11 13:23:44",
        categories: ["youtube", "analysis", "movie", "japan"],
        list_score: [3.9, 4.7, 4.9, 3.8, 5.0]
    },
    {
        id: 6,
        title: "Gameplay FFVII remake GPB no-sub",
        score: "2.0",
        sourceImage: "youtube.png",
        level: "Beginner",
        user: {
          name: "Stinky",
          description: "Prueba de usuario"
        },
        time: "2006-11-11 13:23:44",
        categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"],
        list_score: [4.9, 2.5, 2.6, 4.8, 5.0]

    }];

function SpecificRecommendation(props) {

  let current_id=localStorage.getItem('recommendation-id');
  let currentRecom = recommendations.filter(recom => recom.id == current_id)[0];

  const [totalScore, setTotalScore] = React.useState(currentRecom.score);
  const [firstVoting, setFirstVoting] = React.useState(true);

  //let recom_scores=[4.9, 4.7, 4.9, 4.8, 5.0];

  const classes = useStyles();

  const formatDate=(date)=>{
    var dateStr=date; //returned from mysql timestamp/datetime field
    var a=dateStr.split(" ");
    var d=a[0].split("-");
    var t=a[1].split(":");
    return new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);

  }

  const calculatePublication = (postDate) => {

    let formatPostDate=formatDate(postDate);
    let actualDate = new Date();
    let hours = Math.floor(Math.abs(actualDate - formatPostDate) / 36e5);
    if (hours >= 24) {
      let days = Math.floor(hours / 24);
      return "Posted " + days + " days ago";
    } else {
      return "Posted " + hours + " hours ago";
    }

  };

  let colorScore = totalScore > 3.8 ? "#418525" : totalScore < 2.8 ? "#C77938" : "#C7B117";

  const handleRating = (value) =>{

    if(firstVoting){
      setFirstVoting(false);
    }

    else{
      currentRecom.list_score.pop();
    }

    currentRecom.list_score.push(value);


    let sum = currentRecom.list_score.reduce(function(a, b){
      return a+b;
    }, 0);

    let recom_scores_length = currentRecom.list_score.length;

    let prom=sum/recom_scores_length;

    setTotalScore(prom.toFixed(1));
  }


  return (
    <Grid container id="specificRecommendation" className="specificRecommendationGrid" spacing={1} direction="row" >
      <Grid item className="gridPostContainer">
        <Box boxShadow={3} borderRadius="borderRadius" className="postBoxClass" >

          <Grid container className="headerRecomGrid">

            {/* Uso de la imagen relacionada a la recomendación. */}
            <Grid item className="imageRecomGrid">
              <div className="imageRecomDiv">
                <Avatar variant="square" alt="Remy Sharp" src={currentRecom.sourceImage} style={{ height: '100%', width: '100%' }} />
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
                          <HoverRating className="hooverRating" selectedMatch={handleRating} />
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
          </Grid>

          {/* Uso de la descripción dada a una recomendación en especifico. */}
          <Grid item className="recomDescription">
            <Box borderRadius="borderRadius" className="descripBoxClass">
                {"prueba de funcionamineto gonjnhjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhm hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhrihrhroijhori jijoijoijohtoijtyhtjyhjthotjhojtoiyjhotiyjhoijthjtyijhotjyijhojhoiyjhotjhojtyihjtoiyjhityjhoitjyhoijtoiyjhojyhotjohjtyohjtohjtoiyoijoitjhoityjhoitjhotijhoti rijhoithjotiyhjotjhotiyjhotjhotiyjhotiyjhotyjohjtoihjtojhothjothjotjhotyijhoitjhoytij"}
            </Box>
          </Grid>

          {/* Uso del enlace relacionado a la recomendación.*/}
          <Grid item className="recomRecourseGrid">
            <Box className="recomRecourseBox" align="center">
              <ResourceController />
            </Box>
          </Grid>

          <Grid>

            <Grid container direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={1}>
              <Grid item>
                <Button variant="contained" color="primary">Save</Button>
              </Grid>

              <Grid item>
                <FormDialog />
              </Grid>

            </Grid>
          </Grid>
        </Box>
      </Grid>


      <Grid item xs={4} direction="row" className="gridUserContainerMain">
        <Grid container spacing={0} direction="column" className="gridUserContainer">
          <Grid item xs={10}>
            <Box boxShadow={3} borderRadius="borderRadius" className="profileBox" >
              <Grid container spacing={0}
                direction="column"
                alignItems="center"
                justify="center">

                {/* Aquí uso el nombre de usuario y el enlace a la imagen de perfil.*/}
                <Grid item>
                  <Avatar alt="Stinky" src="logo512.png" className={classes.avatarSize} />
                </Grid>

                {/* Aquí uso el nombre de usuario*/}
                <Grid item>
                  <Typography variant="h4">
                    {currentRecom.user.name}
                  </Typography>
                </Grid>

                <hr style={{width: "13rem",}} />

                {/*Descripción del usuario.*/}
                <Grid>
                  <Typography align="center" style={{ color: "#B3B8E0" }}>
                    {currentRecom.user.description}
                  </Typography>

                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Uso de las categorias asociadas a la recomendación.*/}
          <Grid item xs={10}>
            <Box className={classes.categoriesBox}>
              <ListCategories content={currentRecom.categories} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpecificRecommendation;
