import React from 'react';
import './TrendList.css';
import {Box, Divider} from '@material-ui/core';
import {TrendPost} from './TrendPost';

export function TrendList(props) {

  const size =  props.trends.length;
  const trendsList = props.trends.map((trend, i) => {

    return (
      <div key={"trend-" + i}>
          <TrendPost trend={trend} />
          {
            i !== size-1 && <Divider />
          }
      </div>
    );
  });

  return (

    <Box className="trendListContainer">
          {trendsList}
    </Box>

  );
}
