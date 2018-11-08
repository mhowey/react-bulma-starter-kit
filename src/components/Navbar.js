import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    'theme': ''
  }
  
  changeTheme = (theme) => {
    this.setState({'theme':theme})
    document.body.classList = ''
    document.body.classList.add('theme-'+theme)
  }
  render() {
    return ( <> 
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item' href=''>
          <img src={require('../images/made-with-bulma.png')} width='125'/>
          &nbsp;&nbsp;&nbsp;
          <img src={require('../images/react-logo-text.png')} width='75'/>
        </Link>

        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <span className='navbar-item'>
            <Link to='/bulma-react-content-formatting'>Formatting</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-dropdowns'>Dropdowns</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-containers'>Containers</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-flexbox-tiles'>Tiles</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-columns'>Columns</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-forms'>Forms</Link>
          </span>
          
          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>
              Themes
            </a>

            <div className='navbar-dropdown'>
               <a className={'navbar-item' + (this.state.theme=='materia' ? ' is-active' : '')} onClick={() => this.changeTheme('materia')}>
                Materia
              </a>
              <a className={'navbar-item' + (this.state.theme=='cerulean' ? ' is-active' : '')} onClick={() => this.changeTheme('cerulean')}>
                Cerulean
              </a>
              <a className={'navbar-item' + (this.state.theme=='spacelab' ? ' is-active' : '')} onClick={() => this.changeTheme('spacelab')}>
                Spacelab
              </a>
              <a className={'navbar-item' + (this.state.theme=='litera' ? ' is-active' : '')} onClick={() => this.changeTheme('litera')}>
                Litera
              </a>
              <a className={'navbar-item' + (this.state.theme=='slate' ? ' is-active' : '')} onClick={() => this.changeTheme('slate')}>
                Slate
              </a>
              <a className={'navbar-item' + (this.state.theme=='yeti' ? ' is-active' : '')} onClick={() => this.changeTheme('yeti')}>
                Yeti
              </a>
              <a className={'navbar-item' + (this.state.theme=='lux' ? ' is-active' : '')} onClick={() => this.changeTheme('lux')}>
                Lux
              </a>
              <hr className='navbar-divider'/>
               <a className={'navbar-item' + (this.state.theme=='' ? ' is-active' : '')}  onClick={() => this.changeTheme('')}>
                Bulma Stock (no theme)
              </a>
            </div>
          </div>
        </div>
        
        </div>
      
    </nav> 
    <div className='navbar-item'>
      <div className='buttons is-small'>
      

        
    </div>
  </div>
    </>
    )
  }
}