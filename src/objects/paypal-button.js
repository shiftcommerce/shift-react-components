// Libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../lib/component-mapping'

let PayPalButtons;

class PayPalButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showButton: false
    }
    this.Button = componentMapping('Button')
  }

  componentDidMount () {
    const { paypalCreateOrder, paypalOnApprove } = this.props
    // ensure paypal has loaded and required callbacks are present
    if (window.paypal && paypalCreateOrder && paypalOnApprove) {
      // load paypal Buttons
      PayPalButtons = window.paypal.Buttons.driver('react', { React, ReactDOM })
      // display PayPal button
      this.setState({ showButton: true })
    }
  }

  render () {
    const {
      handleSetPaymentMethod,
      paypalCreateOrder,
      paypalOnApprove,
      mockPayPalApproval,
      enableTestPayPalButton
    } = this.props

    return (
      <>
        { this.state.showButton && <PayPalButtons
          createOrder={(data, actions) => paypalCreateOrder(data, actions)}
          onApprove={(data, actions) => paypalOnApprove(data, actions)}
          onClick={() => handleSetPaymentMethod('PayPal')}
        /> }
        { enableTestPayPalButton && <this.Button label={'Test PayPal Button'} onClick={() => mockPayPalApproval()} /> }
      </>
    )
  }
}

PayPalButton.propTypes = {
  handleSetPaymentMethod: PropTypes.func,
  mockPayPalApproval: PropTypes.func,
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func,
  enableTestPayPalButton: PropTypes.bool
}

export default PayPalButton
