import React from 'react';
import './TrendList.css';
import {Box} from '@material-ui/core';
import {TrendPost} from './TrendPost';

export function TrendList(props) {

  const size =  props.trends.length;
  const trendsList = props.trends.map((trend, i) => {

    return (
      <div key={"trend-" + i}>
          <TrendPost trend={trend} />

      </div>
    );
  });

  return (

    <Box className="trendListContainer">
      {trendsList}
    </Box>

  );
}
