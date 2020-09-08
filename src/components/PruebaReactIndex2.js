import React from 'react';
import logo from './logo.svg';
import '../App.css';

export function PruebaReactIndex2() {
  return (
      <div className="App">
      <header style={{backgroundColor:"blue"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página react de prueba
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}
