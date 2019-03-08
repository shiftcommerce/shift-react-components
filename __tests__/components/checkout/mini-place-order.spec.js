// Libraries
import React from 'react'

// Components
import MiniPlaceOrder from '../../../src/components/checkout/mini-place-order'

test('renders a disabled button when order is invalid', () => {
  const wrapper = shallow(<MiniPlaceOrder
    isValidOrder={false}
    total={10}
  />)

  expect(wrapper.find('Button').props().disabled).toBe(true)
})

test('renders an enabled button when order is valid', () => {
  const wrapper = shallow(<MiniPlaceOrder
    isValidOrder={true}
    total={10}
  />)

  expect(wrapper.find('Button').props().disabled).toBe(false)
})
