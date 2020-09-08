import React, {useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
import {PruebaReactIndex} from './components/PruebaReactIndex';
import {PruebaReactIndex2} from './components/PruebaReactIndex2'
import {Login} from "./components/authentication/Login";
import {ProtectedRoute} from './components/authentication/ProtectedRoute';
import "./App.js";

export default function App(props) {
  useEffect(() => {
    setStorageValues()
  });

  function setStorageValues() {
    localStorage.setItem("name", "Natalia Durán");
    localStorage.setItem("email", "n@mail.com");
    localStorage.setItem("passwd", "maxo06");
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
    }
  ];

  const protectedElements=routes.map((route, i) =>
    <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} />
  );


  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        {protectedElements}
        <Route path="*" component={() => "404 NOT FOUND"}/>
      </Switch>
    </div>
  );
}
