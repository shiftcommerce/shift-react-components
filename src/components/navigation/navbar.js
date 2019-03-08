// Libraries
import React, { Component } from 'react'
import t from 'typy'

// Lib
import componentMapping from '../../lib/component-mapping'

export class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuShown: false
    }

    this.Image = componentMapping('Image')
    this.Loading = componentMapping('Loading')
    this.Logo = componentMapping('Logo')
    this.NavBarOption = componentMapping('NavBarOption')
    this.SearchBar = componentMapping('SearchBar')

    this.toggleMenuShown = this.toggleMenuShown.bind(this)
  }

  toggleMenuShown (e) {
    if (this.state.menuShown) {
      document.body.classList.remove('modal-open')
    } else {
      document.body.classList.add('modal-open')
    }

    this.setState(state => {
      return { menuShown: !state.menuShown }
    })
  }

  renderNavOptions (menuItems) {
    return (
      menuItems.map((menuItem, index) =>
        <this.NavBarOption
          key={index}
          index={index}
          title={menuItem.title}
          href={`/slug?slug=${menuItem.canonical_path}`}
          as={menuItem.canonical_path}
          onClick={this.toggleMenuShown}
        />
      )
    )
  }

  renderNavHeader () {
    const logoSrc = '../../static/shopgo-logo.svg'

    return (
      <div className='c-nav__menu-header'>
        <this.Logo className='c-nav__menu-header-logo' logoSrc={logoSrc} />
        <label htmlFor='burger-menu' className='c-nav__menu-header-cross' onClick={this.toggleMenuShown} />
        { this.renderSearchBar() }
      </div>
    )
  }

  renderSearchBar () {
    return (
      <div className='c-nav__menu-header-search'>
        <this.SearchBar />
      </div>
    )
  }

  renderNavBurgerMenu () {
    return (
      <>
        <input id='burger-menu' type='checkbox' className='c-nav__checkbox' checked={this.state.menuShown} readOnly />
        <div className='c-nav__menu-button' onClick={this.toggleMenuShown} >
          <this.Image className='c-nav__menu-button-image' src='/static/burger-menu-icon.svg' />
          <p>Menu</p>
        </div>
      </>
    )
  }

  render () {
    const { loading, error } = this.props.menu
    const menuItems = t(this.props, 'menu.menu_items').safeObject

    if (loading) {
      return (<this.Loading />)
    } else if (error) {
      return (<p className='c-nav__error'>Sorry! There is an error in loading menus { error }</p>)
    } else {
      return (
        <div className='c-nav' role='navigation'>
          { this.renderNavBurgerMenu() }
          { this.renderNavHeader() }
          <div className='c-nav__menu'>
            <div className='c-nav__menu-list'>
              { this.renderNavOptions(menuItems) }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NavBar
