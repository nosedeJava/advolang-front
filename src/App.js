import React, {useEffect} from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {PruebaReactIndex} from './components/menu/PruebaReactIndex';
import {PruebaReactIndex2} from './components/menu/PruebaReactIndex2'
import {Login} from "./components/menu/authentication/Login";
import {ProtectedRoute} from './components/menu/authentication/ProtectedRoute';
import {CreateRecommendation} from "./components/createRecomendation/CreateRecommendation";
import {AddCategory} from "./components/createRecomendation/AddCategory";
import PrincipalView from "./components/PrincipalView";
import SpecificRecommendation from "./components/specificRecommendation/SpecificRecommendation"

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
      name: "Principal view",
      component: PrincipalView
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
    },
    {
      path:"/specific-recommendation",
      name: "Specific recommendation",
      component: SpecificRecommendation
    },
  ];

  const protectedElements=routes.map((route, i) =>
    <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} />
  );


  return (
    <BrowserRouter >
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          {protectedElements}
          <Route path="*" component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
    </BrowserRouter >

  );
}
