// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

function ShippingMethodsHeader ({ collapsed, onClick }) {
  const Button = componentMapping('Button')

  return (
    <div className='o-form__header c-shipping-method__header'>
      <h2>Your Shipping Method</h2>

      { collapsed &&
          <Button
            aria-label='Edit your shipping method'
            label='Edit'
            status='secondary'
            className='o-button-edit'
            onClick={onClick}
          />
      }
    </div>
  )
}

ShippingMethodsHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
}

export default ShippingMethodsHeader
