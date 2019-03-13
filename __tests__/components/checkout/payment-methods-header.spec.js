// Libraries
import React from 'react'

// Components
import PaymentMethodsHeader from '../../../src/components/checkout/payment-methods-header'

test('renders the navigation button when collapsed', () => {
  const wrapper = shallow(<PaymentMethodsHeader collapsed/>)

  expect(wrapper.find('Button').length).toEqual(1)
})

test("doesn't render the navigation button when not collapsed", () => {
  const wrapper = shallow(<PaymentMethodsHeader/>)

  expect(wrapper.find('Button').length).toEqual(0)
})
