import React from 'react';
import { ListRecommendationService } from "../../services/ListRecomendationService"
import FilterSection from "./FilterSection"
import './PrincipalView.css';

function PrincipalView() {
    return (
        <div className="mainDiv" >
            <FilterSection />
            <ListRecommendationService />
        </div>
    );
}

export default PrincipalView;
