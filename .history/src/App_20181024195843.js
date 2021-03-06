import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const One = () => 
  <div className='one'>
    <h1>This is Component "One"</h1>
    <p>This is some text on the page.</p>
  </div>

const Two = () => 
<div className='two'>
  <h1>This is Component "Two"</h1>
  <p>This is some text on the page.</p>
</div>

const Three = () => 
<div className='three'>
  <h1>This is Component "Three"</h1>
  <p>This is some text on the page.</p>
</div>


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
          <div className='card'>
            <div className='card-header card-header-title'>
              <button><Link to={`/one`}>Route One</Link></button> | 
              <button><Link to={`/two`}>Route Two</Link></button> |
              <button><Link to={`/three`}>Route Three</Link></button>
            </div>
            <div class="tabs">
              <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a >Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </div>
            <div className='card-content'>
              <Route path="/one" component={One} />
              <Route path="/two" component={Two} />
              <Route path="/three" component={Three} />
            </div>
          </div>
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
