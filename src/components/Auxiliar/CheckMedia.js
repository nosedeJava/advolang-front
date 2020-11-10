import {validateUrl, validateVideoID} from 'youtube-validate';

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

export const getYoutubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
