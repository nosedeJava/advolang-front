import React, { useState } from "react";
import './LinkPreviewer.css';
import {Box} from '@material-ui/core';


const Card = (props) => {
  return (
    <div className="previewerDiv">
      <Box className="imageLinkPrevBox">
        <img src={props.image} alt="" className="imageLinkPrev" />
      </Box>
      <Box className="tittleLinkPrevBox">
        <h3 className="card-title">{props.title}</h3>
      </Box>
      <Box className="descLinkPrevBox">
        <p className="card-text">{props.text}</p>
      </Box>
    </div>
  );
};

export const LinkPreviewer = props => {

  return (
    <a
      href={props.href}
      className="link-with-preview"
      style={{textDecoration:"none"}}
    >
      <span> {props.children} </span>
      <Card image={props.image} title={props.title} text={props.text} />

    </a>
  );
};
