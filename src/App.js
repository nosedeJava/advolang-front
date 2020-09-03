import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateRecommendation from "./components/createRecomendation/CreateRecommendation";
import AddCategory from "./components/createRecomendation/AddCategory";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={CreateRecommendation}/>
              <Route path="/cat" exact component={AddCategory}/>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
