// Libraries
import React from 'react'

// Components
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'

test('renders the navigation button when collapsed', () => {
  const wrapper = shallow(<PaymentMethodHeader collapsed title='Test' />)

  expect(wrapper.find('Button').length).toEqual(1)
})

test("doesn't render the navigation button when not collapsed", () => {
  const wrapper = shallow(<PaymentMethodHeader title='Test' />)

  expect(wrapper.find('Button').length).toEqual(0)
})
