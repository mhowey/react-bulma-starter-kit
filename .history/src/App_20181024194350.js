import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={bulma} className="Bulma-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bulma &amp; create-react-app Starter
          </h1>
          <div>
            <Link to={`/test`}>TESTING TEST</Link>
          </div>
          <p>
            <Route path="/test" component={TestComponent} />
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
}

export default App;
