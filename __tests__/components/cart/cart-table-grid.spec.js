// Libraries
import React from 'react'

// Components
import CartTableGrid from '../../../src/components/cart/cart-table-grid'

test('renders correct child elements and classnames', () => {
  const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <CartTableGrid className={className}>
      { label }
    </CartTableGrid>
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(label)
  expect(wrapper.find('section')).toHaveClassName(className)
})
