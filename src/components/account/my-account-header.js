// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'

class MyAccountHeader extends Component {
  constructor (props) {
    super(props)

    this.Link = componentMapping('Link')
    this.Button = componentMapping('Button')
  }

  renderLogout () {
    return (
      <this.Link href='/account/logout'>
        <this.Button
          aria-label='Logout'
          className='c-myaccount-header__logout-button o-button--sml'
          label='Logout'
          status='secondary'
        />
      </this.Link>
    )
  }

  render () {
    return (
      <div className='c-myaccount-header'>
        <h1 className='c-myaccount-header__title'>My Account</h1>
        { this.renderLogout() }
      </div>
    )
  }
}

export default MyAccountHeader
