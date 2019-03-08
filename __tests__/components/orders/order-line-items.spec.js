// Libraries
import React from 'react'

// Component
import OrderLineItems from '../../../src/components/orders/order-line-items'

// Lib
import { penceToPounds } from '../../../src/lib/pence-to-pounds'

// Fixtures
import orders from '../../fixtures/orders'

test('renders correctly', () => {
  // Arrange
  const lineItems = orders.data[0].line_items

  // Act
  const wrapper = mount(
    <OrderLineItems items={lineItems} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(lineItems[0].sku)
  expect(wrapper).toIncludeText(lineItems[0].quantity)
  expect(wrapper).toIncludeText(penceToPounds(lineItems[0].pricing.line_inc_tax))
  expect(wrapper.find('h5').at(1)).toIncludeText(lineItems[1].sku)
  expect(wrapper.find('span').at(3)).toIncludeText(lineItems[1].quantity)
  expect(wrapper.find('a').at(1)).toIncludeText(penceToPounds(lineItems[1].pricing.line_inc_tax))
})
