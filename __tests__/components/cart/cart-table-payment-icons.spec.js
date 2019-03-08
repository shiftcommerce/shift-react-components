// Libraries
import React from 'react'

// Components
import CartTablePaymentIcons from '../../../src/components/cart/cart-table-payment-icons'
import PaymentIcons from '../../../src/components/cart/payment-icons'

test('renders correct child elements and classnames', () => {
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <CartTablePaymentIcons className={className} />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').first()).toHaveClassName(className)
  expect(wrapper).toContainReact(<PaymentIcons />)
})
