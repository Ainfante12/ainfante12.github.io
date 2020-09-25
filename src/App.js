import React from 'react';
import logo from './blair.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="personal picture" />
        <p>
          My name is Angeline Infante, and I am going to master React!
        </p>
        <a
          className="Github-link"
          href="https://git.io/JeETH "
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
