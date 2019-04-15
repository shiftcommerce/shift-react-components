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
      return <this.Image src='/static/payments/pay-pal.svg' className='c-payment-methods__summary-information-card-image' />
    } else {
      return this.renderCardInformation(paymentMethod)
    }
  }

  renderCardInformation (paymentMethod) {
    return (
      <p>{ paymentMethod }</p>
    )
  }

  render () {
    const { onClick, paymentMethod, showEditButton, title } = this.props
    return (
      <div className={'c-payment-methods__summary'}>
        <this.PaymentMethodHeader
          collapsed
          onClick={onClick}
          title={title}
          showEditButton={showEditButton}
        />
        <div className={'c-payment-methods__summary-information'}>
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
  title: PropTypes.string.isRequired
}

export default PaymentMethodSummary
