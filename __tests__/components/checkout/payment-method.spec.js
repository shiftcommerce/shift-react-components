// Libraries
import React from 'react'

// Components
import PaymentMethod from '../../../src/components/checkout/payment-method'
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'
import StripePayment from '../../../src/components/checkout/stripe-payment'

test('renders the payment method header and stripe payment component', () => {
  const dummyClassName = 'dummy-classname'

  const wrapper = shallow(<PaymentMethod cart={{}} order={{}} className={dummyClassName} />)

  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toHaveClassName(dummyClassName)
  expect(wrapper.find(PaymentMethodHeader).length).toEqual(1)
  expect(wrapper.find(StripePayment).length).toEqual(1)
})
