// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'

// Libs
import componentMapping from '../../lib/component-mapping'
import { decimalPrice } from '../../lib/decimal-price'

class CartTableSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.Link = componentMapping('Link')
  }

  /**
   * Renders the promotions
   * @param  {Object}  cart
   * @return {string} - HTML markup for the component
   */
  renderPromotions (cart) {
    return cart.discount_summaries.map(discountSummary => {
      return (
        <dl className='c-cart-summary__promotion' key={ discountSummary.id }>
          <dt>{ discountSummary.name }</dt>
          <dd>- &pound;{ decimalPrice(discountSummary.total) }</dd>
        </dl>
      )
    })
  }

  /**
   * Renders the shipping price
   * @param  {Object}  cart
   * @param  {boolean} loading
   * @return {string} - HTML markup for the component
   */
  renderShippingPrice (cart, loading, cheapestShipping) {
    if (loading) {
      return <a>Estimating shipping cost...</a>
    } else if (cart.shipping_method) {
      return <a>{ `Shipping: £${decimalPrice(cart.shipping_method.total)}` }</a>
    } else {
      return <a>{ `Shipping from: £${cheapestShipping.total}` }</a>
    }
  }

  /**
   * Renders the cart total
   * @param  {Object}  cart
   * @param  {Object}  cheapestShipping
   * @return {string} - HTML markup for the component
   */
  renderTotal (cart, cheapestShipping) {
    if (cart.shipping_method) {
      return cart.total
    } else {
      return cart.total + cheapestShipping.total
    }
  }

  render () {
    const { cart, className, loading, cheapestShipping } = this.props

    return (
      <>
        <section className={classNames(className, 'c-cart-summary')}>
          <dl>
            <dt><a>Total Price:</a></dt>
            <dd><a>£{ decimalPrice(cart.sub_total) }</a></dd>
          </dl>
          { this.renderPromotions(cart) }
          <dl>
            <dt>{ this.renderShippingPrice(cart, loading, cheapestShipping) }</dt>
          </dl>
          <dl>
            <dt><p className='u-bold'>TOTAL:</p></dt>
            <dd><p className='u-bold'>£{ !loading && decimalPrice(this.renderTotal(cart, cheapestShipping)) }</p></dd>
          </dl>
          <dl>
            <a>* Including VAT</a>
          </dl>
        </section>
        <section className={classNames(className, 'c-cart-summary-buttons')}>
          <this.Link href='/slug?slug=/homepage' as='/' className='o-button--sml c-cart-summary-buttons__cta c-cart-summary-buttons__cta--continue'>
            Continue Shopping
          </this.Link>
          <this.Link href='/checkout/shipping-address' className='o-button--sml c-cart-summary-buttons__cta c-cart-summary-buttons__cta--proceed'>
            Checkout
          </this.Link>
        </section>
      </>
    )
  }
}

export default CartTableSummary
