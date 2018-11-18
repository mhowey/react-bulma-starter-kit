import React, { Component } from 'react'
// import logo from '../logo.svg';
// import bulma from '../bulma-logo.png';
import './App.scss'
import { Switch, Route, Redirect } from 'react-router'
import Navbar from './components/Navbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faCoffee, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import Formatting from './components/pages/Formatting'
import Forms from './components/pages/Forms'
import ToggleTabs from './components/pages/ToggleTabs'
import Dropdowns from './components/pages/Dropdowns'
import NoMatch from './components/pages/NoMatch'
import Containers from './components/pages/Containers'
import FlexboxTiles from './components/pages/FlexboxTiles'
import Columns from './components/pages/Columns'

library.add(faGhost, faCoffee, faPencilAlt)

class App extends Component {
  render() {
    return (
      <span>
        <Navbar />
        <div className='card'>  
          <div className='card-header card-header-title'>
              This is the content card header
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
              <Route exact path='/bulma-react-forms' component={Forms} />
              <Route exact path='/bulma-react-toggle-menus-tabs' component={ToggleTabs} />
              <Route exact path='/bulma-react-flexbox-tiles' component={FlexboxTiles} />
              <Route exact path='/bulma-react-columns' component={Columns} />
              
              {/** Two options for the fall-through routing...
              Commented out Route to NoMatch component is essentially a "404 page", make sure you uncomment the import for it above.
              Then uncomment the Route below with no specified path parameter below and this will load the NoMatch component as the fall-through
              The NoMatch page content can be modified in this file: ./components/pages/NoMatch.js
              */}
              <Route component={NoMatch} />
              {/** if you use the NoMatch component, there is no harm in leaving the Redirect below
              because the Switch will have already executed on the NoMatch component Route
              */}
              <Redirect to="/bulma-react-content-formatting"/>
            </Switch>
          </div>
        </div>
      </span>
    )
  }
}

export default App
