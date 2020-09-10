import React from 'react';
import logo from './logo.svg';
import '../../App.css';

export function PruebaReactIndex() {
  return (
      <div className="App">
      <header className="App-header">
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
      <main>
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

      </main>
    </div>

  );
}
