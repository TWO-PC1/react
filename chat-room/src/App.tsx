import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let name:string='a'
  let [a,b]   =  useState<string>('a')


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {name}
          {a}
          
        </p>
      </header>
    </div>
  );
}

export default App;
