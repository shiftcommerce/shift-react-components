// Libraries
import React from 'react'
import { StripeProvider } from 'react-stripe-elements'

// Lib
import Config from '../../../src/lib/config'

// Component
import StripeWrapper from '../../../src/components/checkout/stripe-wrapper'

describe('StripeWrapper', () => {
  it('renders the payment method is not available if api key is not present', () => {
    // Act
    const wrapper = shallow(<StripeWrapper />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('* PAYMENT THROUGH STRIPE IS CURRENTLY NOT AVAILABLE *')
  })

  it('renders StripeProvider component if the api key is present', () => {
    // Arrange
    Config.set({
      stripeApiKey: 'TEST_API_KEY'
    })

    // Act
    const wrapper = shallow(<StripeWrapper />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(StripeProvider).length).toEqual(1)
  })
})
