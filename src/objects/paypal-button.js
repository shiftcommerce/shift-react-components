// Libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let Buttons;

class PayPalButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showButton: false
    }
  }

  componentDidMount () {
    const { paypalCreateOrder, paypalOnApprove } = this.props
    // ensure paypal has loaded and required callbacks are present
    if (window.paypal && paypalCreateOrder && paypalOnApprove) {
      // load paypal Buttons
      Buttons = window.paypal.Buttons.driver('react', { React, ReactDOM })
      // display PayPal button
      this.setState({ showButton: true })
    }
  }

  render () {
    const {
      paypalCreateOrder,
      paypalOnApprove,
      handleSetPaymentMethod
    } = this.props

    return (
      <>
        <div id="o-paypal-button-container"></div>
        { this.state.showButton && <Buttons
          createOrder={(data, actions) => paypalCreateOrder(data, actions)}
          onApprove={(data, actions) => paypalOnApprove(data, actions)}
          onClick={() => handleSetPaymentMethod('PayPal')}
        /> }
      </>
    )
  }
}

PayPalButton.propTypes = {
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func,
  handleSetPaymentMethod: PropTypes.func
}

export default PayPalButton
