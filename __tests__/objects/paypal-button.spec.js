// Libraries
import React from 'react'

// Object
import PayPalButton from '../../src/objects/paypal-button'

test('renders correctly', () => {
  // Arrange
  global.paypal = {
    Buttons: {
      driver: jest.fn(() => {
        return jest.fn()
      })
    }
  } // set mock window.paypal
  const paypalCreateOrder = jest.fn()
  const paypalOnApprove = jest.fn()
  const onClick = jest.fn()

  // Act
  const wrapper = shallow(
    <PayPalButton 
      paypalCreateOrder={paypalCreateOrder}
      paypalOnApprove={paypalOnApprove}
      onClick={onClick}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(paypal.Buttons.driver).toHaveBeenCalled()
})
