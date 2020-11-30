import React, {useState, useEffect} from 'react';
import './SavedRecommendationsList.css';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import {Box, Grid} from '@material-ui/core';
import {SavedRecomPost} from './SavedRecomPost';
import Divider from '@material-ui/core/Divider';

export function SavedRecommendationsList(props) {

  const listContent = props.savedRecoms.map((recommendation, i) => {
    return (
        <Box  className="savedRecomGridItem">
          <SavedRecomPost
            savedRecom={recommendation}
          />
        </Box>

    );
  });

  return (
    <div className="savedListContentDiv">


    <Box className="savedRecomsListContainer">
      {listContent}
    </Box>
    </div>
  );

}
