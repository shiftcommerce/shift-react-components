// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

let PayPalButton;

class PaymentMethods extends Component {
  constructor (props) {
    super(props)
    this.Button = componentMapping('Button')
    this.Head = componentMapping('Head')
    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
  }

  componentDidMount () {
    const paypal = require('paypal-checkout')
    PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM })
    this.setState({ showPayPalButton: true })
  }

  initializePayPal (paypalClientID) {
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientID}`
    script.async = true
    document.body.appendChild(script)
  }

  paypalEnabled () {
    return paypalClientID && paypalCreateOrder && paypalOnApprove 
  }

  render () {
    const {
      nextSection,
      paypalClientID,
      paypalCreateOrder,
      paypalOnApprove
    } = this.props

    return (
      <>
        { this.initializePayPal(paypalClientID) }

        <div aria-label='Payment method' className='o-form c-payment-methods'>
          <this.PaymentMethodHeader title={ 'Payment Method' } />

          <div className='c-payment-methods__options'>
            { this.paypalEnabled() && this.state.showPayPalButton && <PayPalButton
              createOrder={ (data, actions) => paypalCreateOrder(data, actions) }
              onApprove={ (data, actions) => paypalOnApprove(data, actions) }
            /> }

            <h4 className='c-payment-methods__option-text'>OR</h4>

            <this.Button
              className='o-button--lrg c-payment-methods__button'
              type='button'
              label={ 'Pay By Credit/Debit Card' }
              onClick={ () => nextSection() }
            />
          </div>
        </div>
      </>
    )
  }
}

PaymentMethods.propTypes = {
  nextSection: PropTypes.func,
  paypalClientID: PropTypes.string,
  paypalCreateOrder: PropTypes.func,
  paypalOnApprove: PropTypes.func
}

export default PaymentMethods
