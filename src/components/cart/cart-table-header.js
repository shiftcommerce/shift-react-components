// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Pluralize from 'react-pluralize'
import t from 'typy'

// Lib
import { decimalPrice } from '../../lib/decimal-price'
import businessDaysFromNow from '../../lib/business-days-from-now'

class CartTableHeader extends PureComponent {
  /**
   * Render the details of the basket, such as how many items are in the basket
   * @param  {Object} cart
   * @return {string} - HTML markup for the component
   */
  renderBasketDetails (cart) {
    return (
      <div className='c-cart-table__header-grid-item c-cart-table__header-grid-item--a'>
        <h1 className='c-cart-table__title'>Your Shopping Basket <a className='c-cart-table__amount'>({ cart.line_items_count || 0 })</a></h1>
        <div className='c-cart-table__text'>
          <p className='c-cart-table__description'>You have <a>{ cart.line_items_count || 0 }</a> <Pluralize singular='item' count={cart.line_items_count || 0} showCount={false} /> in your shopping basket</p>
          <p className='c-cart-table__description'><Pluralize singular='This' plural='These' count={cart.line_items_count || 0} showCount={false} /> <Pluralize singular='item' count={cart.line_items_count || 0} showCount={false} /> will be saved for 48 hours depending on availability</p>
        </div>
      </div>
    )
  }

  /**
   * Render the estimated delivery date
   * @param  {array}  shippingMethods
   * @return {string} - HTML markup for the component
   * @todo update to use actual delivery date, currently using data from fixture
   */
  renderDeliveryEstimate (shippingMethod) {
    const workingDays = parseInt(t(shippingMethod, 'meta_attributes.working_days.value').safeObject)

    return (
      <div className='c-cart-table__header-grid-item c-cart-table__header-grid-item--b'>
        <h1 className='c-cart-table__title'>Estimated Delivery</h1>
        <p>We will deliver your item: <a>{ businessDaysFromNow(workingDays).format('dddd Do MMMM') }</a></p>
      </div>
    )
  }

  render () {
    const { cart, className, shippingMethod } = this.props

    return (
      <section className={classNames(className, 'c-cart-table__header')}>
        { this.props.breadcrumb }
        <div className='c-cart-table__header-grid'>
          { this.renderBasketDetails(cart) }
          { this.renderDeliveryEstimate(shippingMethod) }
        </div>
        <div className='c-cart-table__header-total'>
          <h4 className='c-cart-table__total'>£{ decimalPrice(cart.total || 0) }</h4>
        </div>
      </section>
    )
  }
}

export default CartTableHeader
