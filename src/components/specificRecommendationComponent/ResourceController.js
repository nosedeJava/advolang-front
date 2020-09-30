import React from 'react';
import {Box } from '@material-ui/core';
import './ResourceController.css';

export function ResourceController(props) {

  const imageDiv=(url)=>{
    return (
      <Box className="imageBox">
        <img className="image" src={url} alt="resourceImage" />
      </Box>
    );
  };

  const audioDiv=(url)=>{
    return (

      <Box className="audioBox">
        <audio controls="controls">
          <source src={url} type="audio/mp3"/>
          Your browser does not support the audio element.
        </audio>
      </Box>
    );
  };

  const videoDiv=(url)=>{
    return (

      <Box className="video-responsive">
        <iframe
          title="video"
          src={url}
          frameborder="0"
          allowfullscreen="allowfullscreen">
        </iframe>
      </Box>
    );
  };

  const typeList={
    "video": videoDiv(props.resource.url),
    "image": imageDiv(props.resource.url),
    "audio": audioDiv(props.resource.url)
  }

  const options = (resource) => {
    const type=resource.type;
    // const url=resource.url;

    // const objectq=typeList[type];
    return (
      typeList[type]
    );
  }

  return (
    <div>
      {options(props.resource)}
    </div>
  );
}
