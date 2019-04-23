// Libraries
import React from 'react'

// Components
import AddressFormHeader from '../../../src/components/checkout/address-form-header'

test('renders the navigation button when collapsed', () => {
  // Arrange
  const title = 'Shipping Address'

  // Act
  const wrapper = shallow(<AddressFormHeader collapsed={true} title={title} showEditButton={true}/>)

  // Arrange
  expect(wrapper.find('Button').length).toEqual(1)
  expect(wrapper).toIncludeText(title)
})

test("doesn't render the navigation button when not collapsed", () => {
  // Arrange
  const title = 'Billing Address'
  
  // Act
  const wrapper = shallow(<AddressFormHeader title={title} showEditButton={true}/>)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})
