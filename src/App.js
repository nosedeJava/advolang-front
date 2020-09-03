import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel} from './components/Panel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PruebaReactIndex from './components/PruebaReactIndex';
import PruebaReactIndex2 from './components/PruebaReactIndex2'


const routes = [
  {
    path: "/",
    name: "pruebaReactIndex",
  },
  {
    path: "/pruebaReactIndex2",
    name: "pruebaReactIndex2",
  }
];

export default class  App extends React.Component {

  constructor(props){

      super(props);

      const pruebaReactIndex = () => (
          <PruebaReactIndex />
      );

      const pruebaReactIndex2 = () => (
          <PruebaReactIndex2 />
      );


      this.state={currentPageComponent:pruebaReactIndex}
      this.pages={
        "pruebaReactIndex":pruebaReactIndex,
        "pruebaReactIndex2":pruebaReactIndex2
      };
      this.handleSelectedItem=this.handleSelectedItem.bind(this);

  }

  handleSelectedItem(itemComponent){
    this.setState({currentPageComponent: this.pages[itemComponent]});
  }


  render(){
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
            <Route  component={this.state.currentPageComponent}/>
          </div>
        </div>
      );

    }

    return (

      <div>
        <Panel menuList={routes} handleMenuSelection={this.handleSelectedItem} />
        <Router>
            <div className="generalContainer">
              {page}

            </div>
        </Router>
      </div>

    );
  }
}
