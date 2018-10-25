import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const One = () => 
  <div className='test'>
    <h1>This is Component "One"</h1>
    <p>This is some text on the page.</p>
  </div>


const Two = () => 
<div className='contact'>
  <h1></h1>
  <p>You can contact us on this page!</p>
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
              <Link to={`/one`}>Route One</Link> | 
              <Link to={`/two`}>Route Two</Link>
            </div>
            
          </div>
          <p>
            <Route path="/one" component={One} />
            <Route path="/two" component={Two} />
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
