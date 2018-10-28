import React, { Component } from 'react';
// import logo from './logo.svg';
// import bulma from './bulma-logo.png';
import './App.scss';
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import Navbar from './components/Navbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faCoffee, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import Formatting from './components/pages/Formatting'
import Dropdowns from './components/pages/Dropdowns'
// import NoMatch from './components/pages/NoMatch'
import Containers from './components/pages/Containers'

library.add(faGhost, faCoffee, faPencilAlt)

const routes = [
  { path:'/', component: 'Home', exact: true },
  { path:'/bulma-reactd-dropdowns', component: 'Dropdowns', exact: true },
]

class App extends Component {
  render() {
    return (
      <span>
        <Navbar />
          <div className='card'>  
            <div className='card-header card-header-title'>
              <button className='button is-warning'><FontAwesomeIcon icon="pencil-alt" /> <Link to={`/bulma-react-content-formatting`}> Formatting</Link></button> 
              <button className='button is-primary'><FontAwesomeIcon icon="ghost" /> <Link to={`/bulma-react-dropdowns`}> Dropdowns</Link></button> 
              <button className='button is-primary'><FontAwesomeIcon icon="coffee" /> <Link to={`/bulma-react-containers`}>Containers</Link></button> 
              <button className='button is-primary'><FontAwesomeIcon icon="pencil-alt" /><Link to={`/three`}>Route Three</Link></button>
            </div>
            <div className='card-content'>
            <Switch>
             <Route exact path="/" render={() => (
                  <Redirect to="/bulma-react-content-formatting"/>
                )
              }/>
              <Route exact path='/bulma-react-content-formatting' component={Formatting} />
              <Route exact path='/bulma-react-dropdowns' component={Dropdowns} />
              <Route exact path='/bulma-react-containers' component={Containers} />
              
              /** Two options for the fall-through routing...
              Commented out Route to NoMatch component is essentially a "404 page", make sure you uncomment the import for it above.
              
              Then uncomment the Route below with no specified path parameter below and this will load the NoMatch component as the fall-through
              The NoMatch page content can be modified in this file: ./components/pages/NoMatch.js
               */
              {/* <Route component={NoMatch} /> */}
              /** if you use the NoMatch component, there is no harm in leaving the Redirect below
              because the Switch will have already executed on the NoMatch component Route
               */
              <Redirect to="/bulma-react-content-formatting"/>
            </Switch>
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
      </span>
    );
  }
}

export default App;
