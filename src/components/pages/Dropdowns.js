import React, {Component} from 'react';
import '../../App.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Dropdown from '../Dropdown'

export default class Dropdowns extends Component {
  dropdownData = ['Option One', 'Option Two', 'Option Three'];
  render() {
    return ( 
      <span className='content'> 
      <h1>Dropdowns...</h1>
      <span className='content columns'>
        <div className='column'>
          <Dropdown data={this.dropdownData} />
        </div>
        <div className='column'>
          <Dropdown data={this.dropdownData} />
        </div>
        <div className='column'>
          <Dropdown data={this.dropdownData} />
        </div>
    </span> </span>);
    }
}