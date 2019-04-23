// Libraries
import React from 'react'

// Components
import PaymentHeader from '../../../src/components/checkout/payment-header'

test('renders the navigation button when collapsed and `showEditButton` is true', () => {
  // Arrange
  const title = 'Payment Details'
  
  // Act
  const wrapper = shallow(<PaymentHeader collapsed title={title} showEditButton={true} />)

  // Assert
  expect(wrapper.find('Button').length).toEqual(1)
  expect(wrapper).toIncludeText(title)
})

test('does not render the navigation button when not collapsed', () => {
  // Arrange
  const title = 'Payment Details'
  
  // Act
  const wrapper = shallow(<PaymentHeader title={title} showEditButton={true}/>)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})

test('does not render the  edit button when `showEditButton` is false', () => {
  // Arrange
  const title = 'Payment Details'

  // Act
  const wrapper = shallow(<PaymentHeader title={title} collapsed showEditButton={false} />)

  // Assert
  expect(wrapper.find('Button').length).toEqual(0)
  expect(wrapper).toIncludeText(title)
})
