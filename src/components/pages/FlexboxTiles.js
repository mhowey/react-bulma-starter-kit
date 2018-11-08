import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Hero from '../Hero'

export default class FlexboxTiles extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='content'>
        <article class='message is-warning'>
          <div class='message-header'>
            <p>article.message.is-warning > .message-header</p>
            
          </div>
          <div class='message-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
        <div className='tile is-ancestor'>
          <div className='tile is-horizontal is-6'>
            <div className='tile'>
              <div className='tile is-parent is-vertical'>
                <div className='box tile is-child'>
                  <Link to='/bulma-react-dropdowns'>
                    <article className='tile is-child notification is-primary is-child box'>
                      <p className='subtitle'>
                        You can make a big old clickable / TOUCH-able section (LIKE THIS ONE!) by wrapping a tile article element inside 
                        react-router-dom's Link component.
                      </p>
                    </article>
                  </Link>
                </div>
                <div className='notification is-dark'>
                  <button className='delete'></button>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                  consectetur adipiscing elit
                </div>
                <div className='notification is-link'>
                  <button className='delete'></button>
                  Icon :: 
                  <span className='icon'>
                    <i className='fas fa-home'></i>
                  </span>
                </div>
                
                
                <article className='tile is-child notification is-warning'>
                  <p className='title'>Two</p>
                  <p className='subtitle'>Bottom tile</p>
                </article>
                
                <article className='tile is-child notification is-danger'>
                  <p className='title'>Three</p>
                  <p className='subtitle'>Bottom tile</p>
                </article>
                
              </div>  
            </div>
          </div>
          <div className='tile is-vertical is-6'>
            <div className='tile'>
              <div className='tile is-parent is-vertical'>
                <article className='tile is-child notification is-info'>
                  <p className='title'>Vertical...</p>
                  <p className='subtitle'>Top tile</p>
                </article>
                <article className='tile is-child notification is-warning'>
                  <p className='title'>...tiles</p>
                  <p className='subtitle'>Bottom tile</p>
                </article>
                <article className='tile is-child notification is-danger'>
                  <p className='title'>...tiles</p>
                  <p className='subtitle'>Bottom tile</p>
                </article>
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}
