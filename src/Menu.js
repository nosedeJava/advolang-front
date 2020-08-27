import React from 'react';

import logo from './logo.svg';

import './App.css';


class App extends React.Component{

  constructor(){

      super();

      this.state={

          show:true

      }

  }

  render(){

    return (

      <div className="App">

        <header className="App-header">

          <div>

              {

                  this.state.show? <div><h1>Hide and Show</h1></div> : null

              }

              <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>

          </div>

        </header>

      </div>

    );

  }

}


export default App;
