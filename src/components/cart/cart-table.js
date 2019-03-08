// Libraries
import React from 'react'
import classNames from 'classnames'

/**
 * Renders the cart table wrapper, and its respective child elements
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const CartTable = (props) => {
  return (
    <section className={classNames(props.className, 'c-cart-table')}>
      { props.children }
    </section>
  )
}

export default CartTable
