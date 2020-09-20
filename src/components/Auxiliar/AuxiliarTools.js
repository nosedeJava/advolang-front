/* Calcula la media de los valores de una lista */
export const calcProm = (list_values) => {
  let sum = list_values.reduce(function(a, b){
    return a+b;
  }, 0);

  let recom_scores_length = list_values.length;

  return (sum/recom_scores_length).toFixed(1);
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
