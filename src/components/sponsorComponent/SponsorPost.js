import React from 'react';
import './SponsorPost.css';
import {Box, Card, CardContent, Typography, CardActions, Button, ButtonBase} from '@material-ui/core';


export function SponsorPost(props) {
  return (
    <Box className="sponsorPostGeneralBox">
      <ButtonBase className="sponsorPostButtonBase" >
        <Card className="sponsorPostCard">
          <CardContent className="sponsorPostCardTittle">
            <Box>
              {props.sponPost.title}
            </Box>
            
          </CardContent>
        </Card>
      </ButtonBase>
    </Box>

  );
}
