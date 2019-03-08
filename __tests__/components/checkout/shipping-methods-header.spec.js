// Libraries
import React from 'react'

// Components
import ShippingMethodsHeader from '../../../src/components/checkout/shipping-methods-header'

test('renders the navigation button when collapsed', () => {
  const wrapper = shallow(<ShippingMethodsHeader collapsed />)

  expect(wrapper.find('Button').length).toEqual(1)
})

test("doesn't render the navigation button when not collapsed", () => {
  const wrapper = shallow(<ShippingMethodsHeader />)

  expect(wrapper.find('Button').length).toEqual(0)
})
