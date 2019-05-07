// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentMethod extends PureComponent {
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
      handleSetPaymentMethod,
      mockPayPalApproval,
      paypalCreateOrder,
      paypalOnApprove,
      enableTestPayPalButton
    } = this.props

    return (
      <div aria-label='Payment method' className='o-form c-payment-method'>
        <this.PaymentMethodHeader title={'Payment Method'} />
        <div className='c-payment-method__options'>
          <this.PayPalButton 
            paypalCreateOrder={paypalCreateOrder}
            paypalOnApprove={paypalOnApprove}
            handleSetPaymentMethod={handleSetPaymentMethod}
            mockPayPalApproval={mockPayPalApproval}
            enableTestPayPalButton={enableTestPayPalButton}
          />
          <p className='c-payment-method__option-text u-bold'>OR</p>
          <this.Button
            className='o-button--sml c-payment-method__button'
            type='button'
            label={'Pay By Credit/Debit Card'}
            onClick={() => this.handleDefaultPaymentSelection('Credit/Debit Card')}
          />
        </div>
      </div>
    )
  }
}

PaymentMethod.propTypes = {
  handleSetPaymentMethod: PropTypes.func,
  mockPayPalApproval: PropTypes.func,
  nextSection: PropTypes.func,
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func,
  enableTestPayPalButton: PropTypes.bool
}

export default PaymentMethod
