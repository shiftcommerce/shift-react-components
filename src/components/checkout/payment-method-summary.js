// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

const PaymentMethodSummary = ({ billingAddress, paymentMethod, showEditButton, onClick, withErrors }) => {
  const PaymentMethodHeader = componentMapping('PaymentMethodHeader')

  return (
    <>
      <PaymentMethodHeader
        title={'Payment'}
        collapsed
        onClick={onClick}
        showEditButton={showEditButton}
      />
      <div className={classNames('c-payment-method__summary', { 'o-form__error': withErrors })}>
        <p>
          <span className='u-bold'> Payment Mode: </span>
          <span>{ paymentMethod }</span>
        </p>
        { billingAddress &&
          <p>
            <span className='u-bold'>Billing Address: </span>
            <span className='u-bold'>{ billingAddress.first_name } { billingAddress.last_name } </span>
            <span>{ billingAddress.address_line_1 }, { billingAddress.city }, { billingAddress.postcode }</span>
          </p>
        }
      </div>
    </>
  )
}

PaymentMethodSummary.propTypes = {
  billingAddress: PropTypes.object,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  withErrors: PropTypes.bool
}

export default PaymentMethodSummary
