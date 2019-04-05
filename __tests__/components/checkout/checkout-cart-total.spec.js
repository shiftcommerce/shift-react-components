// Libraries
import React from 'react'

// Components
import CheckoutCartTotal from '../../../src/components/checkout/checkout-cart-total'

test("renders the cart's total, subtotal and shipping cost", () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      discountSummaries={[]}
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Total Price:  £15.00')
  expect(wrapper).toIncludeText('Shipping costs:  £5.00')
  expect(wrapper).toIncludeText('TOTAL:  £20.00')
})

test('renders promotions', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      discountSummaries={[{
        id: 1,
        name: 'Christmas Special',
        total: 1.5
      }]}
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper).toIncludeText('Christmas Special:- £1.50')
})

test('renders shipping promotions', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      discountSummaries={[]}
      shippingDiscount={-5}
      shippingDiscountName='Free shipping'
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper).toIncludeText('Free shipping:- £5.00')
})

test('renders payment errors', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      discountSummaries={[]}
      paymentError='Payment authentication failed'
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Payment authentication failed')
})
