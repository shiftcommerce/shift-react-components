// Libraries
import React from 'react'
import classNames from 'classnames'

/**
 * Renders a help message when there is no data for the cart
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const CartNoData = (props) => {
  return (
    <section className={classNames(props.className, 'c-cart-no-data')}>
      <p>
        You have no items in your cart. If you are expecting items in it, please refresh.
      </p>
      <p>
        If issue still persists, please check with our customer care.
      </p>
    </section>
  )
}

export default CartNoData
