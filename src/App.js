import React, {useEffect} from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {PruebaReactIndex} from './components/menu/PruebaReactIndex';
import {PruebaReactIndex2} from './components/menu/PruebaReactIndex2'
import {Login} from "./components/menu/authentication/Login";
import {ProtectedRoute} from './components/menu/authentication/ProtectedRoute';
import {CreateRecommendation} from "./components/createRecomendation/CreateRecommendation";
import {AddCategory} from "./components/createRecomendation/AddCategory";
import { ListRecommendationService } from "./services/ListRecomendationService"
import FilterSection from "./components/FilterSection"

export default function App(props) {
  useEffect(() => {
    setStorageValues()
  });

  function setStorageValues() {
    localStorage.setItem("name", "Anónimos");
    localStorage.setItem("email", "an@mail.com");
    localStorage.setItem("passwd", "anonimo");
  }

  const routes = [
    {
      path: "/",
      name: "pruebaReactIndex",
      component: PruebaReactIndex
    },

    {
      path: "/pruebaReactIndex2",
      name: "pruebaReactIndex2",
      component: PruebaReactIndex2
    },
    {
      path: "/createRecommendation",
      name: "Crear recomendación",
      component: CreateRecommendation
    },
    {
      path: "/cat",
      name: "Adicionar categoría",
      component: AddCategory
    }
  ];

  const protectedElements=routes.map((route, i) =>
    <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} />
  );


  return (
    <BrowserRouter >
      <div>
        <Switch>
          <Route path="/" exact component={ListRecommendationService} />
          <Route exact path="/login" component={Login} />
          {protectedElements}
          <Route path="*" component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
    </BrowserRouter >

  );
}
