import React from 'react';
import {Box} from '@material-ui/core';
import './ResourceController.css';
import { LinkPreviewer } from "./preview/LinkPreviewer";
import {getYoutubeVideoId, validVideoId, getYouTubeEmbedURL} from '../Auxiliar/CheckMedia.js';

export function ResourceController(props) {

  const rec = props.resource;
  const type = props.resourceType.toLowerCase();
  let urlContent ;
  let urlImage ;

  

  if (typeof(props.contentURL) !== 'undefined') {
    urlContent = props.contentURL[0];
    urlImage = props.contentURL[1];
  }


  const imageDiv=(url)=>{
    return (
      <Box className="imageBox">
        <img className="image" src={url} alt="resourceImage" />
      </Box>
    );
  };

  const audioDiv=(url, type)=>{
    return (

      <Box className="audioBox">
        <audio controls="controls">
          <source src={url} type={type}/>
          Your browser does not support the audio element.
        </audio>
      </Box>
    );
  };

  const videoDiv=(url, type)=>{
    return (

      <Box className="video-responsive">
        <iframe
          title="video"
          src={url}
          frameborder="0"
          type={type}
          allowfullscreen="allowfullscreen">
        </iframe>
      </Box>
    );
  };

  const textDiv = () => {
    return (
      <Box  className="urlContent">
        <LinkPreviewer
          href={rec}
          image={urlImage}
          title={urlContent.title}
          text={urlContent.description}
        >
        </LinkPreviewer>
      </Box>
    );
  }


  const options = () => {
    if(type === 'url'){

      const youTubeId = getYoutubeVideoId(rec);

      if(youTubeId !== null){
        if(validVideoId(youTubeId)) {
          const youTubeEmbed = getYouTubeEmbedURL(youTubeId)
          return <div> {videoDiv("http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://localhost:3000/", "video")} </div>;
        }
      }

      else {
        return <div>{textDiv()}</div>
      }
    }

    const typeList={
      "video": videoDiv(rec, type),
      "image": imageDiv(rec, type),
      "audio": audioDiv(rec, type)
    }

    const typeParts = type.split("/");
    const specificType = typeParts[0]

    return (
      <div> {typeList[specificType]} </div>
    );
  }


  return (
    <div>
      {
        options()
      }

    </div>
  );
}
