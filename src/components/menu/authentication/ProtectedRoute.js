import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth.js";
import {Panel} from '../Panel';
import './Main.css';


export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return (
            <div>
              <Panel menuList= {rest.menuList} history={props.history}/>
              <div className="generalContainer">
                <Component {...props} />
              </div>
          </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
