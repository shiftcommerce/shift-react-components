// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

// Assets
import imgBagIcon from '../../static/bag-icon.svg'

class Minibag extends PureComponent {
  constructor () {
    super()

    this.Button = componentMapping('Button')
    this.Image = componentMapping('Image')
    this.Link = componentMapping('Link')
  }

  /**
   * Renders the minibag, which links to the cart page
   * @param  {number} lineItemCount
   * @return {string} - HTML markup for the component
   */
  renderCartLink (lineItemCount) {
    return (
      <this.Link href='/cart' className='c-minibag__cart'>
        <div className='c-minibag__cart-image'>
          <span className='c-minibag__cart-image-count' >
            { lineItemCount }
          </span>
          <this.Image className='c-minibag__cart-image-icon' src={imgBagIcon} />
        </div>
        <span className='c-minibag__cart-label'>Basket</span>
      </this.Link>
    )
  }

  /**
   * Renders the checkout link. Disabled if the cart is empty
   * @param  {number} lineItemCount
   * @return {string} - HTML markup for the component
   */
  renderCheckoutLink (lineItemCount) {
    return (
      <div className='c-minibag__checkout'>
        <this.Link
          href={(lineItemCount > 0) ? '/checkout' : ''}
          className={classNames('o-button o-button--primary', { 'o-button--disabled': (lineItemCount === 0) })}>
            Checkout
        </this.Link>
      </div>
    )
  }

  render () {
    const { cart, className } = this.props
    const lineItemCount = cart.line_items_count || 0

    return (
      <div className={classNames(className, 'c-header__minibag c-minibag')}>
        { this.renderCartLink(lineItemCount) }
        { this.renderCheckoutLink(lineItemCount) }
      </div>
    )
  }
}

export default Minibag
