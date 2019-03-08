// Libraries
import React from 'react'
import componentMapping from '../../lib/component-mapping'
import PropTypes from 'prop-types'

function PaymentMethodHeader ({ collapsed, onClick }) {
  const Button = componentMapping('Button')

  return (
    <div className='o-form__header  c-payment-method__header'>
      <h2>Payment</h2>
      { collapsed && <Button
        aria-label='Edit your payment method'
        className='o-button-edit'
        label='Edit'
        status='secondary'
        onClick={onClick}
      /> }
    </div>
  )
}

PaymentMethodHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
}

export default PaymentMethodHeader
