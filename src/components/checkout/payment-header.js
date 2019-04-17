// Libraries
import React from 'react'
import componentMapping from '../../lib/component-mapping'
import PropTypes from 'prop-types'

function PaymentHeader ({ title, collapsed, onClick, showEditButton }) {
  const Button = componentMapping('Button')
  return (
    <div className='o-form__header  c-payment__header'>
      <h2>{ title }</h2>
      { collapsed && showEditButton && <Button
        aria-label='Edit your payment method'
        className='o-button-edit'
        label='Edit'
        status='secondary'
        onClick={onClick}
      /> }
    </div>
  )
}

PaymentHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default PaymentHeader
