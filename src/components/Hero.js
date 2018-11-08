import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <article class="message is-warning">
                <div class="message-header">
                  <p>article.message.is-warning > .message-header</p>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
            </div>
          </div>
        </section>
    )
  }
}
