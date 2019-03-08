// Libraries
import React from 'react'

// Components
import AddressBook from '../../../src/components/checkout/address-book'

// Fixtures
import addressBookData from '../../fixtures/address-book'

test('it renders given addresses correctly', () => {
  const component = shallow(<AddressBook addressBook={addressBookData} />)

  // Check address 1 is correctly rendered
  expect(component).toIncludeText('Bernard Houseman')
  expect(component).toIncludeText('84 West Quay Street')
  expect(component).toIncludeText('Blackpool')
  expect(component).toIncludeText('LS27EY')
  expect(component).toIncludeText('GB')

  // Check address 2 is correctly rendered
  expect(component).toIncludeText('Bob Doe')
  expect(component).toIncludeText('20 Cardigan Lane')
  expect(component).toIncludeText('Leeds')
  expect(component).toIncludeText('LS27EY')
  expect(component).toIncludeText('GB')
})

test('selecting an address passess its id to onBookAddressSelected', () => {
  const onBookAddressSelected = jest.fn()

  const component = shallow(<AddressBook
    addressBook={addressBookData}
    onBookAddressSelected={onBookAddressSelected}
  />)

  // Select the last address in the book
  component.find({ type: 'radio' }).last().prop('onChange')()

  // Check the Redux store has been correctly populated
  expect(onBookAddressSelected).toHaveBeenCalledWith('23')
})

test('deleteing an address calls the callback prop with address data', () => {
  const onAddressDeleted = jest.fn()

  // Mount the component wrapped up in the store provider
  const wrapper = shallow(<AddressBook
    addressBook={addressBookData}
    formName='shippingAddress'
    onAddressDeleted={onAddressDeleted}
    onClose={() => {}}
  />)

  // Click on the first address's delete button
  wrapper.find({ label: 'Delete' }).first().prop('onClick')()

  // Check that the callback has been called
  expect(onAddressDeleted).toHaveBeenCalledWith(expect.objectContaining({
    id: '22'
  }))
})
