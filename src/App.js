import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListRecommendations} from './components/ListRecommendations';
import FilterSection from './components/FilterSection';

function App() {
  const recommendations = [{title:"The last samurai analysis on YouTube",score:"4.2",sourceImage:"youtube.png",level:"Beginner",user:"urobs",time:"posted 6 hours ago",categories:["youtube","analysis","movie","japan"]},
                          {title:"Gameplay FFVII remake GPB no-sub",score:"4.8",sourceImage:"youtube.png",level:"Beginner",user:"Stinky",time:"posted 1 day ago",categories:["gameplay","videogame","FFVII","GPB","gameplay","videogame","FFVII","GPB"]}]
  return (
    <div className="App">
      <FilterSection />
      <ListRecommendations recommendationList={recommendations}/>
    </div>
  );
}

export default App;
