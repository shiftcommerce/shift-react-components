// Libraries
import React from 'react'

// Components
import CartTable from '../../../src/components/cart/cart-table'

test('renders correct child elements and classnames', () => {
  const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <CartTable className={className}>
      { label }
    </CartTable>
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(label)
  expect(wrapper.find('section')).toHaveClassName(className)
})
