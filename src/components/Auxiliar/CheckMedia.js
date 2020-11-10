import {validateUrl, validateVideoID} from 'youtube-validate';


/* Check mime-type of a given url (image/.png, video/.mp4, ...)*/
export const CheckMimeType = (url) => {
  var mime = require('mime-types');
  return mime.lookup(url);
}

export const CheckValidYoutubeURL = async (url, callback) => {
  var validator = require('swaelos-youtube-validator')
  validator.validateURL(url, function(res, err)
  {
      if(err)
          console.log("the URL validation resulted in failure")
      else
          console.log(res)
  })
}

export const CheckValidYoutubeID = (id, callback) => {

  let valid=true;

  validateVideoID(id)
      .catch (
          error =>{
            valid=false;
          }
      )
      .finally(
          callback(valid)
      )
}

/* Method to get youTube video id of a given youTube url*/
export const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11) ? match[2] : null;
}

/* Check if a given youtubr id is valid (video exists)*/
export const validVideoId = (id) => {
  var img = new Image();
  img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
  return checkThumbnail(img.width);
}


/* Check thumbnail youtube video size*/
const checkThumbnail = (width) => {
  //HACK a mq thumbnail has width of 320.
  //if the video does not exist(therefore thumbnail don't exist), a default thumbnail of 120 width is returned.
  if (width === 120) {
    return false;
  }
  return true;
}

/* Get youtube embed url */
export const getYouTubeEmbedURL = (youTubeId) => {
  return `https://www.youtube-nocookie.com/embed/${youTubeId}`;
}
