import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const One = () => 
  <div className='one'>
    <h1>This is Component "One"</h1>
    <p>Tumblr meh retro, farm-to-table wolf tote bag aesthetic subway tile tofu man bun</p>
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

const Four = () => 
<div className='four'>
  <h1>This is Component "Four"</h1>
  <p>Church-key kickstarter williamsburg fanny pack. Beard ramps flexitarian narwhal. Ramps polaroid hashtag mustache.</p>
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
                <li><Link to={`/one`}>One</Link></li>
                <li><Link to={`/two`}>Two</Link></li>
                <li><Link to={`/three`}>Three</Link></li>
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
