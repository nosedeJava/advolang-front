import {validateUrl, validateVideoID} from 'youtube-validate';

export const CheckMimeType = (url) => {
  var mime = require('mime-types');
  return mime.lookup(url);
}

export const CheckValidYoutubeURL = (url, callback) => {

  let valid=true;

  validateUrl(url)
      .catch (
          error =>{
            valid=false;
          }
      )
      .finally(
          callback(valid)
      )
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
