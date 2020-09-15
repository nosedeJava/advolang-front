import React from 'react';
import { Grid, Box, Card, CardMedia, Typography, Button, Avatar } from '@material-ui/core';
import './ResourceController.css';

export function ResourceController(props) {

  const videoDiv=()=>{
    return (

      <Box className="video-responsive">
        <iframe
          title="video"
          src="https://www.youtube.com/embed/BjC0KUxiMhc"
          frameborder="0"
          allowfullscreen="allowfullscreen">
        </iframe>
      </Box>
    );
  };

  return (
    <div>
      {videoDiv()}
    </div>
  );
}
