// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

// Assets
import payPalIogo from '../../static/payments/pay-pal.svg'
import creditCardIcon from '../../static/payments/credit-card.svg'

class PaymentMethodSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.Image = componentMapping('Image')
    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
  }

  renderPaymentMethodInformation (paymentMethod) {
    return (
      <this.Image 
        src={paymentMethod === 'PayPal' ? payPalIogo : creditCardIcon}
        className={ paymentMethod === 'PayPal' ? 'c-payment-method__summary-information-pay-pal-image' : 'c-payment-method__summary-information-card-image' }
      />
    )
  }

  render () {
    const { headerTitle, onClick, paymentMethod, showEditButton } = this.props
    return (
      <div className={'c-payment-method__summary'}>
        <this.PaymentMethodHeader
          collapsed
          onClick={onClick}
          title={headerTitle}
          showEditButton={showEditButton}
        />
        <div className={'c-payment-method__summary-information'}>
          {this.renderPaymentMethodInformation(paymentMethod)}
        </div>
      </div>
    )
  }
}

PaymentMethodSummary.propTypes = {
  onClick: PropTypes.func,
  paymentMethod: PropTypes.string.isRequired,
  showEditButton: PropTypes.bool,
  headerTitle: PropTypes.string.isRequired
}

export default PaymentMethodSummary
