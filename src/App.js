import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recomendation from './components/Recomendation';

function App() {
  const recommendations = {title:"The last samurai analysis on YouTube",score:"4.2",sourceImage:"youtube.png",level:"beginner",user:"urobs",time:"posted 6 hours ago"}
  return (
    <div className="App">
      <Recomendation {...recommendations}/>
    </div>
  );
}

export default App;
