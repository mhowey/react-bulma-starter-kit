import React, { Component } from 'react';
import '../../App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// these are just to have an easy way to ouput greater than and less than symbols in our jsx...
// probably not necessary...
const LT = () => ('<')
const GT = () => ('>')

export default class Formatting extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            size: 'is-small'
            }
    }
    
    render() {
        return (
            <>
            <div className="tabs is-centered is-medium is-toggle-rounded">
              <ul>
                <li className={this.state.size === 'is-small' ? 'is-active' : '' } ><a href='#' onClick={() => this.setState({size: 'is-small'})}>.is-small</a></li>
                <li className={this.state.size === 'is-medium' ? 'is-active' : '' } ><a href='#' className={this.state.size === 'is-medium' ? 'is-active' : '' } onClick={() => this.setState({size: 'is-medium'})}>.is-medium</a></li>
                <li className={this.state.size === 'is-large' ? 'is-active' : '' } ><a href='#' className={this.state.size === 'is-large' ? 'is-active' : '' }onClick={() => this.setState({size: 'is-large'})}>.is-large</a></li>
              </ul>
            </div>
            <div className={'home content is-small ' + this.state.size}>
                <h1>Welcome to the Bulma React Starter Kit!</h1>
                <p><code><LT/>div className={'content ' + this.state.size }<GT/></code></p>
                <h3>Purpose:</h3>
                <p>
                    The purpose of this starter kit is to provide a bunch of examples of implementing
                    the various styling, display and components inside a create-react-app
                </p>
            </div>
            </>
        )
    }
}
