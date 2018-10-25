import React, { Component } from 'react';
import logo from '../../logo.svg';
import bulma from '../../bulma-logo.png';
import '../../App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class One extends Component {
    render() {
        return (
        <div class="dropdown is-active">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
            <a href="#" class="dropdown-item">
                Dropdown item
            </a>
            <a class="dropdown-item">
                Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
                Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
                Other dropdown item
            </a>
            <hr class="dropdown-divider" />
            <a href="#" class="dropdown-item">
                With a divider
            </a>
            </div>
        </div>
        </div>
        );
    }
}

export default Dropdowns