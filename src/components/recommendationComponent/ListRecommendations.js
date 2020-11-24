import React from 'react';
import Recommendation from './Recommendation';
import './ListRecommendations.css';

export function ListRecommendations(props) {

  const listContent = props.recommendations.map((recommendation, i) => {
    return <Recommendation key={"recommendation-" + i} recom={recommendation} />
  });

  return (
    <div className="listContentDiv">
      {listContent}
    </div>
  );

}
