import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    'theme': '',
    navbar_active: false,
    themeMenu_active: false,
  }
  toggleHamburgerMenu = () => {
    this.setState({ navbar_active: !this.state.navbar_active })
  }
  toggleThemeMenu = () => {
    this.setState({ themeMenu_active: !this.state.themeMenu_active })
  }
  changeTheme = (theme) => {
    this.setState({ 'theme': theme })
    document.body.classList = ''
    document.body.classList.add(`theme-${theme}`)
  }
  render () {
    return ( <> 
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item' href=''>
          <img alt='made with Bulma logo' src={require('../../images/made-with-bulma.png')} width='125'/>
          &nbsp;&nbsp;&nbsp;
          <img alt='made with react logo' src={require('../../images/react-logo-text.png')} width='75'/>
        </Link>

        <button
          onClick={() => this.toggleHamburgerMenu()}
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div className={'navbar-menu' + (this.state.navbar_active ? ' is-active' : ' is-hidden')}>
        <div className='navbar-start'>
          <span className='navbar-item'>
            <Link to='/bulma-react-content-formatting' onClick={()=>this.toggleHamburgerMenu()}>Formatting</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-dropdowns' onClick={()=>this.toggleHamburgerMenu()}>Dropdowns</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-containers' onClick={()=>this.toggleHamburgerMenu()}>Containers</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-flexbox-tiles' onClick={()=>this.toggleHamburgerMenu()}>Tiles</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-columns' onClick={()=>this.toggleHamburgerMenu()}>Columns</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/bulma-react-forms' onClick={()=>this.toggleHamburgerMenu()}>Forms</Link>
          </span>
          
          <div className='navbar-item has-dropdown is-hoverable'>
            <div className='navbar-link' onClick={()=>this.toggleThemeMenu()}>
              Themes
            </div>
            <div className={'navbar-dropdown' + (this.state.themeMenu_active ? ' is-active' : ' is-hidden')}>
              <div className={'navbar-item' + (this.state.theme==='materia' ? ' is-active' : '')} onClick={() => this.changeTheme('materia')}>
                Materia
              </div>
              <div className={'navbar-item' + (this.state.theme==='cerulean' ? ' is-active' : '')} onClick={() => this.changeTheme('cerulean')}>
                Cerulean
              </div>
              <div className={'navbar-item' + (this.state.theme==='spacelab' ? ' is-active' : '')} onClick={() => this.changeTheme('spacelab')}>
                Spacelab
              </div>
              <div className={'navbar-item' + (this.state.theme==='litera' ? ' is-active' : '')} onClick={() => this.changeTheme('litera')}>
                Litera
              </div>
              <div className={'navbar-item' + (this.state.theme==='slate' ? ' is-active' : '')} onClick={() => this.changeTheme('slate')}>
                Slate
              </div>
              <div className={'navbar-item' + (this.state.theme==='yeti' ? ' is-active' : '')} onClick={() => this.changeTheme('yeti')}>
                Yeti
              </div>
              <div className={'navbar-item' + (this.state.theme==='lux' ? ' is-active' : '')} onClick={() => this.changeTheme('lux')}>
                Lux
              </div>
              <hr className='navbar-divider'/>
              <div className={'navbar-item' + (this.state.theme==='' ? ' is-active' : '')}  onClick={() => this.changeTheme('')}>
                Bulma Stock (no theme)
              </div>
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