import React from 'react';
import { Grid } from '@material-ui/core';
import Recommendation from './Recommendation';
import './ListRecommendations.css';

export class ListRecommendations extends React.Component {
    render() {
        const listContent = this.props.recommendationList.map((recommendation, i) => {
            return <Recommendation key={"recommendation-" + i} {...recommendation} />
        });
        return (
            <div className="listContentDiv">
                {listContent}
            </div>
        );
    }
}
