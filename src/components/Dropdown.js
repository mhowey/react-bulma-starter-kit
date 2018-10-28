import React, {Component} from 'react'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false
    }
  }

  toggleDropdown() {
    this.setState({ active: !this.state.active });
  }
  
  render() {
    return (
      <div>
        <div className={'dropdown' + (this.state.active ? ' is-active' : '')} onClick={()=> this.setState({active: !this.state.active})}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Option ONE</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" className="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <hr className="dropdown-divider"/>
              <a href="#" className="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
