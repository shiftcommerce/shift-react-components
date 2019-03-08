// Libraries
import React from 'react'

// Components
import PaymentIcons from '../../../src/components/cart/payment-icons'

test('renders correct child elements and classnames', () => {
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <PaymentIcons className={className} />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('We Accept')
  expect(wrapper.find('div').first()).toHaveClassName(className)
  expect(wrapper.find('img').first()).toHaveProp('src', '/static/payments/visa.svg')
})
