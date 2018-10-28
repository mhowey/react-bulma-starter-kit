import React, {Component} from 'react'
import Hero from '../Hero'

export default class Containers extends Component {
  render() {
    return ( <> <div className='content is-small'>
      <h1>Containers</h1>
      <div className="level columns has-text-centered is-mobile">
        <div className='column'>
          <span className='box'>
            in a box
          </span>
          <span className='box'>
            in a box
          </span>
        </div>
        <div className="column">
          <div className='box'>
            <section className="section">
              <div className="container">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                  A simple container to divide your page into
                  <strong>sections</strong>, like the one you're currently reading
                </h2>
              </div>
            </section>
          </div>
        </div>
        <div className="column">
          <div className='box'>
            <article className='media'>
              <div className='media-left columns'>
                <div className='column'>
                  <span className='box'>1</span>
                </div>
                <div className='column'>
                  <span className='box'>2</span>
                </div>
                <div className='column'>
                  <span className='box'>3</span>
                </div>
              </div>
            </article>
          </div>
          <div className='box'>
            <article className='media'>
              <div className='media-left columns'>
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
        <Hero / > </div> < />)
  }
}