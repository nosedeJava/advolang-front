import React from 'react';
import './Loading.css';
import LoadingOverlay from 'react-loading-overlay';
import ReactLoading from "react-loading";


export function DefaultLoading(props){

  return (
    <div className="LoadingOverlayDiv">
      <LoadingOverlay
        className="loadingOverlay"
        active={props.isActive}
        spinner
        >
        <p> </p>
      </LoadingOverlay>
    </div>
  );
}

export function cylonLoading (props){

  return(
    <div  className="cylonLoadDiv" >
      <ReactLoading type="cylon" color={"white"} height={'auto'} width={'100%'}  />
    </div>
  );

}
