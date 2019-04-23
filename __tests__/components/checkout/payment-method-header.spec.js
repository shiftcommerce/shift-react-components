// Libraries
import React from 'react'

// Components
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'

test('renders the navigation button when collapsed and `showEditButton` is true', () => {
  // Arrange
  const title = 'Payment Method'

  // Act
  const wrapper = shallow(<PaymentMethodHeader collapsed title={title} showEditButton={true} />)

  // Assert
  expect(wrapper.find('Button').length).toEqual(1)
  expect(wrapper).toIncludeText(title)
})

test('does not render the navigation button when not collapsed', () => {
  // Arrange
  const title = 'Payment Method'

  // Act
  const wrapper = shallow(<PaymentMethodHeader title={title} showEditButton={true}/>)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})

test('does not render the  edit button when `showEditButton` is false', () => {
  // Arrange
  const title = 'Payment Method'
  
  // Act
  const wrapper = shallow(<PaymentMethodHeader title={title} collapsed showEditButton={false} />)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})
