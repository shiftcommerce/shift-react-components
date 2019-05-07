// Libraries
import React from 'react'

// Components
import Payment from '../../../src/components/checkout/payment'
import PaymentHeader from '../../../src/components/checkout/payment-header'
import StripePayment from '../../../src/components/checkout/stripe-payment'

test('renders the payment header and stripe payment component', () => {
  // Arrange
  const dummyClassName = 'dummy-classname'
  const headerTitle = 'Payment Details'

  // Act
  const wrapper = shallow(<Payment cart={{}} order={{}} title={headerTitle} className={dummyClassName} />)

  // Arrange
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toHaveClassName(dummyClassName)
  expect(wrapper.find(PaymentHeader).length).toEqual(1)
  expect(wrapper.find(StripePayment).length).toEqual(1)
})
