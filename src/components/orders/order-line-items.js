// Libraries
import React, { PureComponent } from 'react'
import t from 'typy'

// Lib
import { decimalPrice } from '../../lib/decimal-price'
import { penceToPounds } from '../../lib/pence-to-pounds'
import componentMapping from '../../lib/component-mapping'

class OrderLineItems extends PureComponent {
  constructor (props) {
    super(props)

    this.Image = componentMapping('Image')
    this.Link = componentMapping('Link')
  }

  /**
  * Render the total prices for the line item
  * @param  {Object} lineItem
  * @return {string} - HTML markup for the component
  */
  renderTotal (lineItem) {
    const total = t(lineItem, 'pricing.line_total_inc_tax').safeObject
    const formattedTotal = decimalPrice(total)

    return (
      <div className='c-order-history__line-items_grid_item2'>
        <a>£{ penceToPounds(formattedTotal) }</a>
      </div>
    )
  }

  /**
  * Render the title & sku for the line item
  * @param  {Object} lineItem
  * @return {string} - HTML markup for the component
  */
  renderTitle (lineItem) {
    // To be updated, see: https://github.com/shiftcommerce/shift-front-end-react/issues/713
    return (
      <>
        <h5>{ lineItem.sku }</h5>
        <h4>{ lineItem.sku }</h4>
      </>
    )
  }

  /**
  * Render the quantity, delivery method & customer name for the line item
  * @param  {Object} lineItem
  * @return {string} - HTML markup for the component
  */
  renderParams (lineItem) {
    const deliveryMethod = t(lineItem, 'shipping_method.label').safeObject
    const customerName = t(lineItem, 'shipping_address.name').safeObject

    return (
      <div className='c-order-history__line-items_grid_item1'>
        { this.renderTitle(lineItem) }
        <span>Quantity: { lineItem.quantity }</span>
        <span>Delivery: { deliveryMethod }</span>
        <span>Address: { customerName }</span>
      </div>
    )
  }

  renderLineItems () {
    const { items } = this.props

    return (
      items.map((lineItem) =>
        <div className='c-order-history__line-items_grid' key={lineItem.sku}>
          { this.renderParams(lineItem) }
          { this.renderTotal(lineItem) }
        </div>
      )
    )
  }

  render () {
    return this.renderLineItems()
  }
}

export default OrderLineItems
