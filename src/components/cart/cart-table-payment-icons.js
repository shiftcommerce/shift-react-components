// Libraries
import React from 'react'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

/**
 * Renders the payment icons
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const CartTablePaymentIcons = (props) => {
  const PaymentIcons = componentMapping('PaymentIcons')

  return (
    <div className={classNames(props.className, 'c-cart-table__icons')}>
      <PaymentIcons />
    </div>
  )
}

export default CartTablePaymentIcons
