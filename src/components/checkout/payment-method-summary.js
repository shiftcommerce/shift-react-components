// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentMethodSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.Image = componentMapping('Image')
    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
  }

  renderPaymentMethodInformation (paymentMethod) {
    if (paymentMethod === 'PayPal') {
      return <this.Image src='/static/payments/pay-pal.svg' className='c-payment-method__summary-information-card-image' />
    } else {
      return <p>{ paymentMethod }</p>
    }
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
