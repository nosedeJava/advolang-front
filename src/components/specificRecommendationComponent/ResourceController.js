import React, { useEffect }  from 'react';
import {Box} from '@material-ui/core';
import './ResourceController.css';
import {componentDidMountListGet, componentDidMountGetWithAzureAfter, componentDidMountPost, componentDidMountGetAzure} from '../../services/Petitions.js';
import { LinkPreviewer } from "./preview/LinkPreviewer";
import LinkPreview from 'react-native-link-preview';


export function ResourceController(props) {

  const rec = props.resource;
  const type = props.resourceType.toLowerCase();
  const urlContent = props.contentURL[0];
  const urlImage = props.contentURL[1];

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

      return <div>{textDiv()}</div>
    }

    const typeList={
      "video": videoDiv(rec, type),
      "image": imageDiv(rec, type),
      "audio": audioDiv(rec, type)
    }

    const typeParts = type.split("/");
    const specificType = typeParts[0]


    return (
      <div>
        {typeList[specificType]}
      </div>
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
