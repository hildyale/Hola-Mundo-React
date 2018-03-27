import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hola Mundo en React</h1>
          <h1 className="App-title">Alejandro Isaza Delgado</h1>
        </header>
        <h2>Referencias</h2>
        <p className="intro">
          <a href="https://blog.heroku.com/deploying-react-with-zero-configuration">
          https://blog.heroku.com/deploying-react-with-zero-configuration</a>
        </p>
        <p className="intro">
        <a href="https://github.com/mars/create-react-app-buildpack">
        https://github.com/mars/create-react-app-buildpack</a>
        </p>
      </div>
    );
  }
}

export default App;
