// Libraries
import React from 'react'

// Components
import CartNoData from '../../../src/components/cart/cart-no-data'

test('renders exception message when component is loaded', () => {
  // act
  const wrapper = shallow(
    <CartNoData />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('You have no items in your cart.')
  expect(wrapper).toIncludeText('If you are expecting items in it, please refresh.')
  expect(wrapper).toIncludeText('If issue still persists, please check with our customer care.')
})
