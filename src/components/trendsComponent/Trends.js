import React, { useEffect } from 'react';
import './Trends.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import {Box, Divider} from '@material-ui/core';
import {TrendList} from './TrendList';
import { Icon} from '@iconify/react';
import crownIcon from '@iconify-icons/mdi/crown';
import {cylonLoading} from '../loadingComponent/Loading';


export function Trends() {

  const [loading, setLoading] = React.useState(true);
  const [recommendations, setRecommendations] = React.useState([]);

  useEffect(() => {
    componentDidMountGet(setLoading, setRecommendations, '/api/recommendations/10');
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
    <Box className="trendContainer">
      <Box className="trendsBasicTopBox">

        <Box className="trendsGeneralTittleBox">
          <Box className="trendsTextTittleBox">
            {"Top 10"}
          </Box>
          <Divider />
          <Box className="trendsIconTittleBox">
            <Icon icon={crownIcon} className="trendsCrownIcon" />
          </Box>
        </Box>
      </Box>
      <Divider style={{backgroundColor: 'white'}} />
      <TrendList trends={recommendations}/>
    </Box>

  );
}
