// Libraries
import React from 'react'

// Components
import CartTableGridItem from '../../../src/components/cart/cart-table-grid-item'

test('renders correct child elements and classnames', () => {
  const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <CartTableGridItem className={className} item='a'>
      { label }
    </CartTableGridItem>
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(label)
  expect(wrapper.find('div')).toHaveClassName(className)
  expect(wrapper.find('div')).toHaveClassName('c-cart-table__grid-item--a')
})
