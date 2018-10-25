import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import One from './components/pages/One'
import Dropdowns from './components/pages/Dropdowns'
import Navbar

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
        <header>

        </header>
        <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Bulma &amp; create-react-app Starter
                </h1>
                <h2 class="subtitle">
                  An application starter kit using create-react-app and Bulma css framework.
                </h2>
              </div>
            </div>
          </section>
          
        
        


<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img src={bulma} className="Bulma-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          <Route path="/bulma-dropdowns" component={Dropdowns} />
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
          <div className='card'>
            <div className='card-header card-header-title'>
              <button><Link to={`/bulma-dropdowns`}>Dropdowns</Link></button> | 
              <button><Link to={`/two`}>Route Two</Link></button> |
              <button><Link to={`/three`}>Route Three</Link></button>
            </div>
            <div class="tabs is-large is-centered">
              <ul>
                <li><Link to={`/bulma-dropdowns`}>Dropdowns</Link></li>
                <li><Link to={`/two`}>Two</Link></li>
                <li><Link to={`/three`}>Three</Link></li>
                <li><Link to={`/four`}>Four</Link></li>
              </ul>
            </div>
            <div className='card-content'>
              <Route path="/one" component={One} />
              <Route path="/two" component={Two} />
              <Route path="/three" component={Three} />
              <Route path="/four" component={Four} />
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
      </div>
    );
  }
}

export default App;
