import React, { useEffect, useState}  from "react";
import './LinkPreviewer.css';
import {Box} from '@material-ui/core';
import { ReactTinyLink } from 'react-tiny-link'


export function LinkPreviewer (props) {

  const [info, setInfo] = useState(null);


  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  const Card = (res) => {
    return (
      <div className="previewerDiv">
        <Box className="imageLinkPrevBox">
          <img src={res.image.length === 0 ? props.defaultImage : res.image[0]} alt="" className="imageLinkPrev" />
        </Box>
        <Box className="tittleLinkPrevBox">
          <h3 className="card-title">{res.title}</h3>
        </Box>
        <Box className="descLinkPrevBox">
          <p className="card-text">{res.description}</p>
        </Box>
        <Box className="publisherPrevBox">
          <p className="card-text">{res.publisher[0]}</p>
        </Box>
      </div>
    );
  };

  return (
    <div>
      <div id="divCheckbox" style={{display: "none"}}>
      <ReactTinyLink onSuccess = {(response) => setInfo(response)} url={props.href} />
    </div>
      {(info !== null) ?
        <div>
          <a  href={props.href}
              className="link-with-preview"
              style={{textDecoration:"none"}}
            >
              <span> {props.children} </span>
              {Card(info)}
          </a>
        </div>

      : <div></div>}
    </div>

  );
};
