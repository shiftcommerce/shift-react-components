// Libraries
import React from 'react'

// Components
import PaymentMethodHeader from '../../../src/components/checkout/payment-method-header'

test('renders the navigation button when collapsed and `showEditButton` is true', () => {
  const wrapper = shallow(<PaymentMethodHeader collapsed title='Test' showEditButton={true} />)

  expect(wrapper.find('Button').length).toEqual(1)
})

test("doesn't render the navigation button when not collapsed", () => {
  const wrapper = shallow(<PaymentMethodHeader title='Test' showEditButton={true} />)

  expect(wrapper.find('Button').length).toEqual(0)
})

test("doesn't render the  edit button when `showEditButton` is false", () => {
  const wrapper = shallow(<PaymentMethodHeader title='Test' collapsed showEditButton={false} />)

  expect(wrapper.find('Button').length).toEqual(0)
})
