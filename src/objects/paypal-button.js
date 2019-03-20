// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaypalButton extends Component {
  /**
   * Renders the PayPal button
   */
  renderPayPalButton() {
    const { paypalClientID, paypalCreateOrder, paypalOnApprove, handleSetPaymentMethod } = this.props
    const script = document.createElement('script')
    
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientID}`
    script.async = true
    script.type  = "text/javascript";
    script.text  = `paypal.Buttons({
      createOrder: ${(data, actions) => paypalCreateOrder(data, actions)},
      onApprove: ${(data, actions) => paypalOnApprove(data, actions)},
      onClick: ${() => handleSetPaymentMethod('paypal')}
    }).render('#paypal-button-container');`
    
    document.body.appendChild(script)
  }
  
  render () {
    return (
      <>
        <div id="paypal-button-container"></div>
        { this.renderPayPalButton() }
      </>
    )
  }
}

PaypalButton.propTypes = {
  paypalClientID: PropTypes.string,
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func,
  handleSetPaymentMethod: PropTypes.func
}

export default PaypalButton
