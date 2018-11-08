import React, {Component} from 'react'
import Hero from '../Hero'
import {Link} from 'react-router-dom'

export default class Containers extends Component {
  render() {
    return ( <section> <div className='content is-small'>
      <h1>Containers</h1>
      <div className="level columns has-text-left">
        <div className='column'>
          <span className='box'>
            in a box
          </span>
          <span className='box'>
            in a box
          </span>
        </div>
        <div className='column'>
          <div className='box'>
            <h1 className='title'>A 'box'</h1>
            <p className='subtitle has-text-primary'>
              This is some other text in with the class '.has-text-primary'
            </p>
          </div>
        </div>
        <div className='column'>
          <div className='box'>
            <article className='media'>
              <div className='media-left columns is-mobile'>
                <Link className='column is-danger' to='/bulma-react-dropdowns'>
                  <span className='box'>1</span>
                </Link>
                <div className='column'>
                  <span className='box'>2</span>
                </div>
                <div className='column'>
                  <span className='box'>3</span>
                </div>
                <div className='column'>
                  <span className='box'>4</span>
                </div>
                <div className='column'>
                  <span className='box'>5</span>
                </div>
              </div>
            </article>
          </div>
          <div className='box'>
            <article className='media'>
              <div className='media-left columns is-mobile'>
                <div className='column'>
                  <span className='box'>1</span>
                </div>
                <div className='column'>
                  <span className='box'>2</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div><div className="container"> <div className='notification'>
      <code>div.containter</code><br/>
      <code>&nbsp;&nbsp;&nbsp;&nbsp;div.notification</code>
    </div> 
    </div>
      <div className='box'>
         </div> <Hero / ></section>)
  }
}