// Libraries
import React from 'react'

// Components
import PaymentMethodsSummary from '../../../src/components/checkout/payment-methods-summary'

test("renders the shipping methods summary", () => {
  // Arrange
  const paymentMethod = 'credit-card'

  // Act
  const wrapper = shallow(<PaymentMethodsSummary paymentMethod={paymentMethod} title={'test'}/>)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toMatchSelector('.c-payment-methods__summary')
  expect(wrapper.find('div').last()).toMatchSelector('.c-payment-methods__summary-information')
  expect(wrapper).toIncludeText(paymentMethod)
})
