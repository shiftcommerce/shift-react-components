// Libraries
import React from 'react'
import componentMapping from '../../lib/component-mapping'
import PropTypes from 'prop-types'

function PaymentMethodsHeader ({ collapsed, onClick }) {
  const Button = componentMapping('Button')

  return (
    <div className='o-form__header c-payment-method__header'>
      <h2>Payment Method</h2>
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

PaymentMethodsHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
}

export default PaymentMethodsHeader
