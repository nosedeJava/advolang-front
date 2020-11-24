import React from 'react';
import './Loading.css';
import LoadingOverlay from 'react-loading-overlay';

export function DefaultLoading(props){

  return (

      <LoadingOverlay
        className="loadingOverlay"
        active={props.isActive}
        spinner
        text='Loading your content...'
        >
        <p>Some content or children or something.</p>
      </LoadingOverlay>
  );
}

export function LoadingTouchBall(){

  return (
    <div>
    </div>
  );
}
