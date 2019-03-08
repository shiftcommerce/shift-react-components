// Libraries
import React from 'react'
import classNames from 'classnames'

/**
 * Renders the cart table grid item wrapper
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const CartTableGridItem = (props) => {
  return (
    <div className={classNames(props.className, 'c-cart-table__grid-item', { [`c-cart-table__grid-item--${props.item}`]: props.item })}>
      { props.children }
    </div>
  )
}

export default CartTableGridItem
