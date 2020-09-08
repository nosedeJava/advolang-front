import React from 'react';
import logo from '../logo.svg';
import './Main.css';
import {Panel} from './Panel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PruebaReactIndex from './PruebaReactIndex';
import PruebaReactIndex2 from './PruebaReactIndex2'
import { useRouteMatch, useHistory } from 'react-router-dom';

const pruebaReactIndex = () => (
    <PruebaReactIndex />
);

const pruebaReactIndex2 = () => (
    <PruebaReactIndex2 />
);

const routes = [
  {
    path: "pruebaReactIndex",
    name: "pruebaReactIndex",
  },
  {
    path: "pruebaReactIndex2",
    name: "pruebaReactIndex2",
  }
];

export function  Main(props)  {

    const isLoggedIn = true;
    var page;


    if(!isLoggedIn){
      page = (
        <div>

          <div>
            Not logged
            {//<Route exact path="/" component={actualPage.componentValue}/>
        }
          </div>
        </div>
      );
    }
    else{
      page = (
        <div>

          <div>
            {pruebaReactIndex}
          </div>
        </div>
      );

    }

    return (

      <div>
        <div className="generalContainer">
        <div>
          {<PruebaReactIndex />}

        </div>

        </div>
      </div>

    );
  }
