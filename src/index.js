import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useHistory } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
