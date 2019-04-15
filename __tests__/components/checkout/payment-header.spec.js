// Libraries
import React from 'react'

// Components
import PaymentHeader from '../../../src/components/checkout/payment-header'

test('renders the navigation button when collapsed and `showEditButton` is true', () => {
  const wrapper = shallow(<PaymentHeader collapsed title='Test' showEditButton={true} />)

  expect(wrapper.find('Button').length).toEqual(1)
})

test('does not render the navigation button when not collapsed', () => {
  const wrapper = shallow(<PaymentHeader title='Test' showEditButton={true}/>)

  expect(wrapper.find('Button').length).toEqual(0)
})

test('does not render the  edit button when `showEditButton` is false', () => {
  const wrapper = shallow(<PaymentHeader title='Test' collapsed showEditButton={false} />)

  expect(wrapper.find('Button').length).toEqual(0)
})
