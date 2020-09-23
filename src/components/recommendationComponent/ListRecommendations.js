import React from 'react';
import Recommendation from './Recommendation';
import './ListRecommendations.css';

export class ListRecommendations extends React.Component {
    render() {
        const listContent = this.props.recommendations.map((recommendation, i) => {
            return <Recommendation key={"recommendation-" + i} {...recommendation} />
        });
        return (
            <div className="listContentDiv">
                {listContent}
            </div>
        );
    }
}
