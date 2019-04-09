// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

// Assets
import accountIcon from '../../static/account-icon.svg'
import imgBagIcon from '../../static/bag-icon.svg'

export class Layout extends Component {
  constructor (props) {
    super(props)

    this.Head = componentMapping('Head')
    this.Footer = componentMapping('Footer')
    this.Image = componentMapping('Image')
    this.Link = componentMapping('Link')
    this.Logo = componentMapping('Logo')
    this.Minibag = componentMapping('Minibag')
    this.NavBar = componentMapping('NavBar')
    this.SearchBar = componentMapping('SearchBar')
  }

  renderNav () {
    return (
      <span className='o-nav u-visible-d'>
        <this.NavBar menu={this.props.menu} />
      </span>
    )
  }

  renderMobileNav () {
    return (
      <span className='o-nav u-hidden-d'>
        <this.NavBar menu={this.props.menu} />
      </span>
    )
  }

  renderHeaderAccount (loggedIn) {
    const signedIn = loggedIn ? 'My Account' : 'Sign In'

    return (
      <div className='c-header__account' onClick={this.props.toggleDropDown}>
        <this.Image className='c-header__account-image' src={accountIcon} />
        <this.Link href='/account/login'>{ signedIn }</this.Link>
        { this.renderAccountDropDown() }
      </div>
    )
  }

  renderAccountDropDown () {
    const { loggedIn, showClass } = this.props

    const addShowClass = showClass ? 'show' : ''

    if (loggedIn) {
      return (
        <div className={classNames('c-header__dropdown-wrapper', addShowClass)} >
          <div className={classNames('c-header__account-dropdown', addShowClass)} >
            <div className='c-header__callout' />
            <this.Link href='/account/myaccount'>Order History</this.Link>
            <this.Link href='/account/forgotpassword'>Change Password</this.Link>
            <this.Link href='/account/logout'>Sign Out</this.Link>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  /**
 * Renders the basket icon
 * @param  {number} lineItemsCount
 * @return {string} - HTML markup for the component
 */
  renderCartLink(lineItemsCount) {
    return (
      <span className='c-minibag__cart' onClick={this.props.toggleMiniBag}>
        <div className='c-minibag__cart-image'>
          <span className='c-minibag__cart-image-count' >
            {lineItemsCount}
          </span>
          <this.Image className='c-minibag__cart-image-icon' src={imgBagIcon} />
        </div>
        <span className='c-minibag__cart-label'>Basket</span>
      </span>
    )
  }

  renderBasket () {
    const { cart, className } = this.props
    const lineItemsCount = cart.line_items_count || 0

    return (
      <div className={classNames(className, 'c-header__minibag c-minibag')}>
        { this.renderCartLink(lineItemsCount) }
      </div>
    )
  }

  renderHeader () {
    const { cart, loggedIn, shrunk } = this.props

    const headerClasses = classNames('o-header', {
      'o-header--shrunk': shrunk
    })

    return (
      <>
        <this.Head>
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
          <link rel='icon' type='image/png' sizes='32x32' href='../../static/favicon.png' key='favicon' />
        </this.Head>
        <div className={ headerClasses }>
          <div className='o-header__top'>
            <div className='o-header__top-wrapper'>
              <this.Logo className='o-header__logo' />
              { this.renderMobileNav() }
              { this.renderHeaderAccount(loggedIn) }
              { this.renderBasket() }
              <this.Minibag
                cart={cart}
                deleteItem={this.props.deleteItem} 
                miniBagDisplayed={this.props.minibagDisplayed} 
                toggleMiniBag={this.props.toggleMiniBag} 
              />
              { this.renderSearch() }
            </div>
          </div>
          { this.renderNav() }
        </div>
      </>
    )
  }

  renderCheckoutHeader () {
    const { payPalClientID } = this.props
    return (
      <this.Head payPalClientID={payPalClientID}>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
        <link rel='icon' type='image/png' sizes='32x32' href='../../static/favicon.png' key='favicon' />
        <script src='https://js.stripe.com/v3/' key='stripe' />
        {payPalClientID && <script src={`https://www.paypal.com/sdk/js?client-id=${payPalClientID}&currency=GBP&intent=authorize&commit=false&disable-funding=credit,sepa&disable-card=amex,visa,mastercard,discover,jcb,elo,hiper`} />}
      </this.Head>
    )
  }

  renderSearch () {
    const {
      search: { filterCategory },
      onCategoryFilterCleared,
      query
    } = this.props

    return (
      <span className='c-header__search'>
        <this.SearchBar
          filterCategory={filterCategory}
          onCategoryFilterCleared={onCategoryFilterCleared}
          query={query}
        />
      </span>
    )
  }

  render () {
    const { skipHeader, children } = this.props

    const bodyClasses = classNames({
      'o-body': skipHeader
    })

    return (
      <>
        { skipHeader ? this.renderHeader() : this.renderCheckoutHeader() }
        <div className={bodyClasses}>
          { children }
        </div>
        <div className='o-footer'>
          <this.Footer />
        </div>
      </>
    )
  }
}

export default Layout
