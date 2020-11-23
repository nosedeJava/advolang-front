import React from 'react';
import './SponsorList.css';
import {SponsorPost} from './SponsorPost';
import {Box, Divider} from '@material-ui/core';

export function SponsorList(props) {

  const size =  props.sponsorRecoms.length;
  const sponsorsRecomsList = props.sponsorRecoms.map((recom, i) => (
    <Box>

      <SponsorPost sponPost={recom} />
        {
          i !== size-1 && <Divider />
        }
    </Box>

  ));

  return (
    <Box className="sponsorsRecomsListBox">
      {sponsorsRecomsList}
    </Box>

  );
}
