// Libraries
import React from 'react'

// Components
import CheckoutCartTotal from '../../../src/components/checkout/checkout-cart-total'

test("renders the cart's total, subtotal and shipping cost", () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      continueButtonProps={{}}
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
      continueButtonProps={{}}
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
      continueButtonProps={{}}
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
      continueButtonProps={{}}
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

test('displays a correct disabled button based on passed props', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      continueButtonProps={{
        label: 'Choose Shipping Method',
        disabled: true
      }}
      discountSummaries={[]}
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper.find('button.c-cart-summary-buttons__cta--proceed')).toHaveText('Choose Shipping Method')
  expect(wrapper.find('button.c-cart-summary-buttons__cta--proceed')).toHaveProp('disabled', true)
})

test('displays a correct enabled button based on passed props', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartTotal
      continueButtonProps={{
        label: 'Choose Shipping Method',
        disabled: false
      }}
      discountSummaries={[]}
      shippingTotal={5}
      subTotal={15}
      total={20}
    />
  )

  // Assert
  expect(wrapper.find('button.c-cart-summary-buttons__cta--proceed')).toHaveText('Choose Shipping Method')
  expect(wrapper.find('button.c-cart-summary-buttons__cta--proceed')).toHaveProp('disabled', false)
})
