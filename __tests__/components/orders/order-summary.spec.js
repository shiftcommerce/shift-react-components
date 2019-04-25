// Libraries
import React from 'react'

// Component
import OrderSummary from '../../../src/components/orders/order-summary'

// Lib
import { decimalPrice } from '../../../src/lib/decimal-price'

// Fixtures
import order from '../../fixtures/order-confirmation'

test('renders correctly', () => {
  // arrange
  const lineItems = order.line_items

  // act
  const wrapper = mount(
    <OrderSummary order={order} />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(lineItems[0].title)
  expect(wrapper).toIncludeText(lineItems[0].sku)
  expect(wrapper).toIncludeText(decimalPrice(order.total_inc_tax - order.shipping_total))
  expect(wrapper).toIncludeText(decimalPrice(order.shipping_total))
  expect(wrapper).toIncludeText(decimalPrice(order.total_inc_tax))
})
