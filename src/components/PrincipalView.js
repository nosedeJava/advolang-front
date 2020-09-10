import React, { useEffect } from 'react';
import { ListRecommendationService } from "../services/ListRecomendationService"
import FilterSection from "./FilterSection"

function PrincipalView() {
    return (
        <div>
            <FilterSection />
            <ListRecommendationService />
        </div>
    );
}

export default PrincipalView;