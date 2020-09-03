import React from 'react';
import {ListRecommendationService} from './services/ListRecomendationService';
import FilterSection from './components/FilterSection';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#B3B8E0"}}>
      <FilterSection />
      <ListRecommendationService />
    </div>
  );
}

export default App;
