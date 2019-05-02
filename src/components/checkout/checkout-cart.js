// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import Pluralize from 'react-pluralize'

// Lib
import { decimalPrice } from '../../lib/decimal-price'
import componentMapping from '../../lib/component-mapping'

function CheckoutCart ({ deleteItem, lineItems, lineItemsCount, total }) {
  const LineItems = componentMapping('LineItems')

  return (
    <>
      <section className='c-checkout-cart__header'>
        <div className='u-float--left c-checkout-cart__table'>
          <h1 className='c-checkout-cart__title'> Your Shopping Basket <a className='c-checkout-cart__amount'>({ lineItemsCount })</a></h1>
          <h4 className='c-checkout-cart__total'>&pound;{ decimalPrice(total) }</h4>
          <div className='c-checkout-cart__text'>
            <p className='c-checkout-cart__description'>You have <a>{ lineItemsCount }</a> <Pluralize singular='item' count={lineItemsCount} showCount={false} /> in your shopping basket</p>
            <p className='c-checkout-cart__description'><Pluralize singular='This' plural='These' count={lineItemsCount} showCount={false} /> <Pluralize singular='item' count={lineItemsCount} showCount={false} /> will be saved for 48 hours depending on availablility</p>
          </div>
        </div>
      </section>
      <LineItems
        deleteItem={deleteItem}
        lineItems={lineItems}
        lineItemsCount={lineItemsCount}
      />
    </>
  )
}

CheckoutCart.propTypes = {
  deleteItem: PropTypes.func,
  lineItems: PropTypes.arrayOf(PropTypes.object),
  lineItemsCount: PropTypes.number,
  total: PropTypes.number
}

export default CheckoutCart
