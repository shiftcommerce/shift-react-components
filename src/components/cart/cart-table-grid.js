// Libraries
import React from 'react'
import classNames from 'classnames'

/**
 * Renders the cart table grid wrapper
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const CartTableGrid = (props) => {
  return (
    <section className={classNames(props.className, 'c-cart-table__grid')}>
      { props.children }
    </section>
  )
}

export default CartTableGrid
