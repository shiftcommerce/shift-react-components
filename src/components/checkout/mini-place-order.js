// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Libs
import { decimalPrice } from '../../lib/decimal-price'
import componentMapping from '../../lib/component-mapping'

function MiniPlaceOrder ({ convertToOrder, isValidOrder, total }) {
  const Button = componentMapping('Button')

  return (
    <div className='c-cart-summary__mini-button-container'>
      <div className='c-cart-summary__mini-button-container-item'>
        <div className='u-bold'>Order Total: &pound;{ decimalPrice(total) }</div>
      </div>
      <div className='c-cart-summary__mini-button-container-item'>
        <Button
          aria-label='Place Order'
          label='Place Order'
          status= {isValidOrder ? 'primary' : 'disabled'}
          disabled= {!isValidOrder}
          onClick={ convertToOrder }
          className='c-cart-summary__buttons--proceed o-button--sml'
          type='button'
        />
      </div>
    </div>
  )
}

MiniPlaceOrder.propTypes = {
  total: PropTypes.number,
  isValidOrder: PropTypes.bool,
  convertToOrder: PropTypes.func
}

export default MiniPlaceOrder
