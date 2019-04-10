// Libraries
import React from 'react'
import { Formik, Form, Field } from 'formik'

// Component
import AccountAddresses from '../../../src/components/account/addresses'
import AddressBook from '../../../src/components/checkout/address-book'

// Static
import countries from '../../fixtures/countries'

test('renders the form when adding a new address', () => {
  const wrapper = mount(<AccountAddresses addingNewAddress addressBook={[]} countries={countries} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Formik)).toExist()
  expect(wrapper.find(Form)).toExist()
})

test('renders the form when editing an existing address', () => {
  const wrapper = mount(<AccountAddresses currentAddress={{}} addressBook={[]} countries={countries} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Formik)).toExist()
  expect(wrapper.find(Form)).toExist()
})

test("doesn't render a form when not editting or adding new addresses", () => {
  const wrapper = mount(<AccountAddresses addressBook={[]} countries={countries} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Formik)).toExist()
  expect(wrapper.find(Form)).not.toExist()
})

test('renders the address book', () => {
  const wrapper = mount(<AccountAddresses addressBook={[]} countries={countries} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(AddressBook)).toExist()
})
