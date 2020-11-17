import React from 'react';
import {Box} from '@material-ui/core';
import './ResourceController.css';
import { LinkPreviewer } from "./preview/LinkPreviewer";
import {getYoutubeVideoId, validVideoId, getYouTubeEmbedURL} from '../Auxiliar/CheckMedia.js';

export function ResourceController(props) {

  const rec = props.resource;
  const type = props.resourceType.toLowerCase()


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
          frameBorder="0"
          type={type}
          allowFullScreen="allowfullscreen">
        </iframe>
      </Box>
    );
  };

  const textDiv = () => {
    return (
      <Box  className="urlContent">
        <LinkPreviewer
          href={rec}
          defaultImage = {props.postImage}
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
          return (
            <div>
              {videoDiv(youTubeEmbed, "video")}
            </div>

        );
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
