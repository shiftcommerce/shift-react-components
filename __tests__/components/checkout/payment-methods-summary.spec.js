// Libraries
import React from 'react'

// Components
import PaymentMethodsSummary from '../../../src/components/checkout/payment-methods-summary'
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'

// Objects
import Image from '../../../src/objects/image'

test("renders the shipping methods summary", () => {
  // Arrange
  const paymentMethod = 'credit-card'

  // Act
  const wrapper = shallow(<PaymentMethodsSummary paymentMethod={paymentMethod} title={'test'}/>)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toMatchSelector('.c-payment-methods__summary')
  expect(wrapper.find('div').last()).toMatchSelector('.c-payment-methods__summary-information')
  expect(wrapper.find(PaymentMethodHeader).length).toEqual(1)
  expect(wrapper).toIncludeText(paymentMethod)
})


test("renders the PayPal image", () => {
  // Arrange
  const paymentMethod = 'PayPal'

  // Act
  const wrapper = shallow(<PaymentMethodsSummary paymentMethod={paymentMethod} title={'test'}/>)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toMatchSelector('.c-payment-methods__summary')
  expect(wrapper.find('div').last()).toMatchSelector('.c-payment-methods__summary-information')
  expect(wrapper.find(PaymentMethodHeader).length).toEqual(1)
  expect(wrapper.find(Image).length).toEqual(1)
})
