// Libraries
import React from 'react'

// Components
import AddressFormHeader from '../../../src/components/checkout/address-form-header'

test('renders the navigation button when collapsed', () => {
  const wrapper = shallow(<AddressFormHeader collapsed title='Test' showEditButton={true} />)

  expect(wrapper.find('Button').length).toEqual(1)
})

test("doesn't render the navigation button when not collapsed", () => {
  const wrapper = shallow(<AddressFormHeader title='Test' showEditButton={true} />)

  expect(wrapper.find('Button').length).toEqual(0)
})
