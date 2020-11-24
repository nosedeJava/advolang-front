import {scores, recommendations} from './Data.js';

/* Calcula la media de los valores de una lista */
export const calcProm = (list_values) => {
  let list_length = list_values.length;

  if(list_length === 0) return 0;

  let sum = list_values.reduce(function(a, b){
    return a+b;
  }, 0);

  let recom_scores_length = list_values.length;

  return (sum/recom_scores_length).toFixed(1);
}

/* De java Date a JS date con formato YYYY-MM-DD HH:MM:SS*/
export const adaptJavaDate = (date) => {
  const moment = require('moment');
  const d = new Date(date);

  return moment(d).format('YYYY-MM-DD HH:MM:SS');
}


/* De sql date a javascript date*/
export const formatDate=(date)=>{
  var dateStr=date; //returned from mysql timestamp/datetime field
  var a=dateStr.split(" ");
  var d=a[0].split("-");
  var t=a[1].split(":");
  return new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);

}

/* Calcula la cantidad de días/horas de una publicación hasta el día de hoy */
export const calculatePublication = (postDate) => {

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

/* Busca la lista de scores de una recomendación específica, dado su id */
export const getRecommendationScores = (values) => {

  return []
  /*return scores.filter(score =>  score.recommendation === recomId).map(recomScore => recomScore.value);*/
};

/* Retorna el color correspondiente al valor del score */
export const getRecommendationScoreColor = (scoreValue) => {

  return (
    scoreValue > 3.8 ? "radial-gradient(circle, rgba(141,251,63,1) 0%, rgba(35,154,46,1) 100%)"
    : scoreValue < 2.8 ? "radial-gradient(circle, rgba(133,9,9,1) 0%, rgba(247,41,6,1) 100%)"
    : "radial-gradient(circle, rgba(255,210,17,0.9794117476091999) 0%, rgba(255,220,107,1) 100%)");
}

/* Retorna verdadero o falso dependiendo si el usuario dado (id) ya realizó la votación sobre una recomendación dada (id) */
export const getFirstVoting = (userId, recomId) => {
  let scoreFilter = scores.filter(score =>  score.recommendation === recomId && score.user === userId);
  return scoreFilter.length === 0 ? true : false;
}

/* Cambia el valor del score de un usuario sobre una recomendación */
export const setUserVote = (userId, recomId, newScoreValue) => {
  scores.map(function(scoreObject){
    if(scoreObject.user === userId && scoreObject.recommendation === recomId) {
      scoreObject.value = newScoreValue;
    }
  })
}

/* Adiciona el score a la lista */
export const addScore = (userId, recomId, scoreValue) => {

  let scoreObject =
  {
    user: userId,
    recommendation: recomId,
    value: scoreValue
  }
  scores.push(scoreObject);
}

/* Retorna el objeto de la recomendación según el id dado*/
export const getCurrentRecom = (recomId) => {
  return recommendations.filter(recom => recom.id === recomId)[0];
}

/* Retorna una lista con los posts que ha hecho el usuario*/
export const getUserRecommendations = (userId) => {
  return recommendations.filter(recom => recom.creator.id === userId);
}
