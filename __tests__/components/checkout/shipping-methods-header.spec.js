// Libraries
import React from 'react'

// Components
import ShippingMethodsHeader from '../../../src/components/checkout/shipping-methods-header'

test('renders the navigation button when collapsed', () => {
  // Arrange
  const title = 'Shipping'
  
  // Act
  const wrapper = shallow(<ShippingMethodsHeader collapsed title={title}/>)

  // Assert
  expect(wrapper.find('Button').length).toEqual(1)
  expect(wrapper).toIncludeText(title)
})

test("doesn't render the navigation button when not collapsed", () => {
  // Arrange
  const title = 'Shipping'

  // Act
  const wrapper = shallow(<ShippingMethodsHeader title={title} />)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})
