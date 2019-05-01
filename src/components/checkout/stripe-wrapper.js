// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StripeProvider, Elements } from 'react-stripe-elements'

// Lib
import Config from '../../lib/config'
import componentMapping from '../../lib/component-mapping'

class StripeWrapper extends Component {
  constructor (props) {
    super(props)

    this.StripeFields = componentMapping('StripeFields')
  }

  renderStripeForm (stripeApiKey) {
    const {
      billingAddress,
      cardTokenRequested,
      onCardTokenReceived,
      setCardErrors,
      setStripeFormComplete
    } = this.props

    return (
      <StripeProvider apiKey={stripeApiKey}>
        <Elements>
          <this.StripeFields
            billingAddress={billingAddress}
            cardTokenRequested={cardTokenRequested}
            onCardTokenReceived={onCardTokenReceived}
            setCardErrors={setCardErrors}
            setStripeFormComplete={setStripeFormComplete}
          />
        </Elements>
      </StripeProvider>
    )
  }

  renderServiceUnavailableMessage () {
    return (
      <div className='u-bold u-text-color--red'>
        * PAYMENT THROUGH STRIPE IS CURRENTLY NOT AVAILABLE *
      </div>
    )
  }

  render () {
    const stripeApiKey = Config.get().stripeApiKey

    return (
      stripeApiKey ? this.renderStripeForm(stripeApiKey) : this.renderServiceUnavailableMessage()
    )
  }
}

StripeWrapper.propTypes = {
  billingAddress: PropTypes.object,
  cardTokenRequested: PropTypes.bool,
  onCardTokenReceived: PropTypes.func,
  setCardErrors: PropTypes.func
}

export default StripeWrapper
