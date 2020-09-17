import React from 'react';

import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateRecommendation from "./components/createRecomendationComponent/createRecommendation/CreateRecommendation";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={CreateRecommendation}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
