// Libraries
import React from 'react'

// Components
import PaymentMethodSummary from '../../../src/components/checkout/payment-method-summary'
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'

// Objects
import Image from '../../../src/objects/image'

test("renders the shipping methods summary", () => {
  // Arrange
  const paymentMethod = 'credit-card'

  // Act
  const wrapper = shallow(<PaymentMethodSummary paymentMethod={paymentMethod} headerTitle={'test'} showEditButton={true}/>)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toMatchSelector('.c-payment-method__summary')
  expect(wrapper.find('div').last()).toMatchSelector('.c-payment-method__summary-information')
  expect(wrapper.find(PaymentMethodHeader).length).toEqual(1)
  expect(wrapper).toIncludeText(paymentMethod)
})


test('renders the PayPal image and does not render edit button', () => {
  // Arrange
  const paymentMethod = 'PayPal'

  // Act
  const wrapper = shallow(<PaymentMethodSummary paymentMethod={paymentMethod} headerTitle={'test'} showEditButton={false}/>)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toMatchSelector('.c-payment-method__summary')
  expect(wrapper.find('div').last()).toMatchSelector('.c-payment-method__summary-information')
  expect(wrapper.find(PaymentMethodHeader).length).toEqual(1)
  expect(wrapper.find(Image).length).toEqual(1)
})
