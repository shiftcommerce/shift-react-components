// Libraries
import React from 'react'

// Components
import CartTableSummary from '../../../src/components/cart/cart-table-summary'

// Fixtures
import cart from '../../fixtures/cart'

test('renders correct messages when cart has items', () => {
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <CartTableSummary
      className={className}
      cart={cart}
      loading={false}
    />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('£1.50 off all orders') // Discount
  expect(wrapper).toIncludeText('Shipping: £3.45') // Shipping total
  expect(wrapper.find('section')).toHaveClassName(className)
})

test('renders correct messages when loading shipping methods', () => {
  // act
  const wrapper = mount(
    <CartTableSummary
      cart={cart}
      loading={true}
    />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Estimating shipping cost...')
})

test('renders correct messages when cart has no shipping method', () => {
  const dummyShippingCost = 5
  const emptyCart = {
    line_items: [],
    sub_total: 10,
    line_items_count: 2,
    discount_summaries: [],
    total: 10
  }

  const cheapestShipping = {
    total: dummyShippingCost
  }

  // act
  const wrapper = mount(
    <CartTableSummary
      cart={emptyCart}
      loading={false}
      cheapestShipping={cheapestShipping}
    />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(`Shipping from: £${dummyShippingCost}`)
  expect(wrapper).toIncludeText('TOTAL:£15.00') // dummyShippingCost + emptyCart.total
})
