import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListRecommendations} from './components/ListRecommendations';

function App() {
  const recommendations = [{title:"The last samurai analysis on YouTube",score:"4.2",sourceImage:"youtube.png",level:"beginner",user:"urobs",time:"posted 6 hours ago"},
                          {title:"Gameplay FFVII remake GPB no-sub",score:"4.8",sourceImage:"youtube.png",level:"beginner",user:"Stinky",time:"posted 1 day ago"}]
  return (
    <div className="App">
      <ListRecommendations recommendationList={recommendations}/>
    </div>
  );
}

export default App;
