import React from "react";
import {Route, Redirect} from "react-router-dom";
import {Panel} from '../menuComponent/Panel';
import './Main.css';
import authService from "../../services/authService.js";

export const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        <Route
          {...rest}
          render={props => authService.isAuthenticated() ? (
            <div>
              <Panel menuList={rest.menuList} history={props.history}/>
              <div className="generalContainer">
                <Component />
              </div>
            </div>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          )}
        />
    )
}
