import React, { useEffect } from 'react';
import './Sponsor.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import {Box, Paper} from '@material-ui/core';
import {SponsorList} from './SponsorList';
import {Dodecahedron} from './figures/Dodecahedron';
import {cylonLoading} from '../loadingComponent/Loading';


export function SponsorRecom() {

  const [loading, setLoading] = React.useState(true);
  const [recommendations, setRecommendations] = React.useState([]);

  useEffect(() => {
    componentDidMountGet(setLoading, setRecommendations, '/api/recommendations/suggestion/'+JSON.parse(localStorage.getItem('user')).id);

  }, []);

  if (loading) {
    return (
      <div style = {{backgroundColor: 'transparent', width:"10vw"}}>
        <div  className="divLoad">
          {cylonLoading()}
        </div>
      </div>
    );

  }

  return (
    <Box className="sponsorRecomsBox">
      <Box className="sponsorTittleBox">
        <div>{"Recommendations for you"}</div>
        <Box className="DodeBox">
          <Dodecahedron />
        </Box>
      </Box>
      <Paper className="sponsorPaper" variant="outlined" square>
        <SponsorList sponsorRecoms={recommendations} />
      </Paper>
    </Box>

  );
}
