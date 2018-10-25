import React, { Component } from 'react';
import logo from './logo.svg';
import bulma from './bulma-logo.png';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class One extends Component {
    render()
        return (
            <div className='one'>
                <h1>This is Component "One"</h1>
                <p>Tumblr meh retro, farm-to-table wolf tote bag aesthetic subway tile tofu man bun</p>
            </div>
        )
}
  
export default One