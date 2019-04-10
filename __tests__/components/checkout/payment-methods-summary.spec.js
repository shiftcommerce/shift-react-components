// Libraries
import React from 'react'

// Components
import PaymentMethodsSummary from '../../../src/components/checkout/payment-methods-summary'

test("renders the shipping methods summary", () => {
  // Arrange
  const paymentMethod = 'credit-card'

  // Act
  const wrapper = shallow(<PaymentMethodsSummary paymentMethod={paymentMethod}/>)

  // Assert
  expect(wrapper.find('div')).toMatchSelector('.c-payment-methods__summary')
  expect(wrapper).toIncludeText(paymentMethod)
})
