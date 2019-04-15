// Libraries
import React from 'react'

// Components
import Payment from '../../../src/components/checkout/payment'
import PaymentHeader from '../../../src/components/checkout/payment-header'
import StripePayment from '../../../src/components/checkout/stripe-payment'

test('renders the payment header and stripe payment component', () => {
  const dummyClassName = 'dummy-classname'

  const wrapper = shallow(<Payment cart={{}} order={{}} className={dummyClassName} />)

  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toHaveClassName(dummyClassName)
  expect(wrapper.find(PaymentHeader).length).toEqual(1)
  expect(wrapper.find(StripePayment).length).toEqual(1)
})
