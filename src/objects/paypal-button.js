// Libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let Button;

class PaypalButton extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
      showButton: false
    }
  }

  componentDidMount () {
    Button = window.paypal.Buttons.driver('react', { React, ReactDOM })
    this.setState({showButton: true })
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
        { this.state.showButton && <Button
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
