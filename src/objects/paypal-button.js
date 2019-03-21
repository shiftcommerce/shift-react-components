// Libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let Buttons;

class PaypalButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showButton: false
    }
  }

  componentDidMount () {
    const { paypalCreateOrder, paypalOnApprove } = this.props
    if (window.paypal && paypalCreateOrder && paypalOnApprove) {
      // load paypal Buttons
      Buttons = window.paypal.Buttons.driver('react', { React, ReactDOM })
      // enable showButton
      this.setState({showButton: true })
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
          createOrder={ (data, actions) => paypalCreateOrder(data, actions) }
          onApprove={ (data, actions) => paypalOnApprove(data, actions) }
          onClick={ () => handleSetPaymentMethod('paypal') }
        />}
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
