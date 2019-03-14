// Libraries
import React from 'react'

// Components
import CheckoutCartButtons from '../../../src/components/checkout/checkout-cart-buttons'

test('displays a correct disabled button based on passed props', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartButtons
      continueButtonProps={{
        label: 'Choose Shipping Method',
        disabled: true
      }}
    />
  )

  // Assert
  expect(wrapper.find('button.c-checkout-cart-buttons__cta--proceed')).toHaveText('Choose Shipping Method')
  expect(wrapper.find('button.c-checkout-cart-buttons__cta--proceed')).toHaveProp('disabled', true)
})

test('displays a correct enabled button based on passed props', () => {
  // Act
  const wrapper = mount(
    <CheckoutCartButtons
      continueButtonProps={{
        label: 'Choose Shipping Method',
        disabled: false
      }}
    />
  )

  // Assert
  expect(wrapper.find('button.c-checkout-cart-buttons__cta--proceed')).toHaveText('Choose Shipping Method')
  expect(wrapper.find('button.c-checkout-cart-buttons__cta--proceed')).toHaveProp('disabled', false)
})
