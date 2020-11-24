import React, { useEffect } from 'react';
import './Sponsor.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import {Box, Divider, Paper} from '@material-ui/core';
import {SponsorList} from './SponsorList';


export function SponsorRecom() {

  const [loading, setLoading] = React.useState(true);
  const [recommendations, setRecommendations] = React.useState([]);

  useEffect(() => {
    componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');

  }, []);

  if (loading) {
    return (
      <div style = {{backgroundColor: 'yellow', lineHeight: 2 }}>
       Loading .......

      </div>
    );

  }

  return (
    <Box className="sponsorRecomsBox">
      <Box className="sponsorTittleBox">
        {"Recommendations for you"}
      </Box>
      <Paper className="sponsorPaper" variant="outlined" square>
        <SponsorList sponsorRecoms={recommendations} />
      </Paper>
    </Box>

  );
}