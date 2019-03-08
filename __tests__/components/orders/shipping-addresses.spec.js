// Libraries
import React from 'react'

// Component
import ShippingAddresses from '../../../src/components/orders/shipping-addresses'

// Fixtures
import orders from '../../fixtures/orders'

test('renders correctly', () => {
  // Arrange
  const shippingAddresses = orders.data[0].shipping_addresses

  // Act
  const wrapper = mount(
    <ShippingAddresses addresses={shippingAddresses} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(shippingAddresses[0].name)
  expect(wrapper).toIncludeText(shippingAddresses[0].company)
})
