// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentMethods extends Component {
  constructor (props) {
    super(props)
    this.Button = componentMapping('Button')
    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
    this.PayPalButton = componentMapping('PayPalButton')
  }

  /**
   * When a customer selects the default checkout option, this funtion is called and 
   * it sets the selected payment method in the state and redirects to the next section
   */
  handleDefaultPaymentSelection(paymentMethod) {
    const { nextSection, handleSetPaymentMethod } = this.props
    handleSetPaymentMethod(paymentMethod)
    nextSection()
  }

  render () {
    const {
      paypalCreateOrder,
      paypalOnApprove,
      handleSetPaymentMethod
    } = this.props

    return (
      <div aria-label='Payment method' className='o-form c-payment-methods'>
        <this.PaymentMethodHeader title={'Payment Method'} />
        <div className='c-payment-methods__options'>
          <this.PayPalButton 
            paypalCreateOrder={paypalCreateOrder}
            paypalOnApprove={paypalOnApprove}
            handleSetPaymentMethod={handleSetPaymentMethod}
          />
          <p className='c-payment-methods__option-text u-bold'>OR</p>
          <this.Button
            className='o-button--sml c-payment-methods__button'
            type='button'
            label={'Pay By Credit/Debit Card'}
            onClick={() => this.handleDefaultPaymentSelection('Credit/Debit Card')}
          />
        </div>
      </div>
    )
  }
}

PaymentMethods.propTypes = {
  nextSection: PropTypes.func,
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func,
  handleSetPaymentMethod: PropTypes.func
}

export default PaymentMethods
