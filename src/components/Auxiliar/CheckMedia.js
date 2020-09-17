import {validateUrl} from 'youtube-validate';

export const CheckValidYoutubeURL=(url)=>{
  alert(url)
  validateUrl("youtube.com/watch?v=2XH5_qafR8k")
  .then(
    () => {

    },
    error => {
      alert(error);
      return false;
    }
  );
}
