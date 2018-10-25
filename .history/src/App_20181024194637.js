import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Test = () => 
  <div className="test">
    <h1>Hello Test!</h1>
    <p>This is some text on the Hello Test page.</p>
  </div>


const Contact = () => 
<div className=""
  <h1>Contact Us!</h1>
  <p>You can contact us on this page!</p>


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
            <Link to={`/test`}>TEST</Link>
            <Link to={`/contact`}>Contact</Link>
          </div>
          <p>
            <Route path="/test" component={Test} />
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
