// Libraries
import React from 'react'

// Components
import AddressFormSummary from '../../../src/components/checkout/address-form-summary'
import AddressFormHeader from '../../../src/components/checkout/address-form-header'

test("renders the addresss summary", () => {
  // Arrange
  const headerTitle = 'test'
  const addressLine1 = '112 some street'
  const city = 'Leeds'
  const firstName = 'John'
  const lastName = 'Smith'
  const postcode= 'LS18DS'

  // Act
  const wrapper = shallow(
    <AddressFormSummary 
      headerTitle={headerTitle}
      addressLine1={addressLine1}
      city={city}
      firstName={firstName}
      lastName={lastName}
      onClick={() => jest.fn()}
      postcode={postcode}
      showEditButton={true}
      collapsed={false}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(addressLine1)
  expect(wrapper).toIncludeText(city)
  expect(wrapper).toIncludeText(firstName)
  expect(wrapper).toIncludeText(lastName)
  expect(wrapper.find(AddressFormHeader).length).toEqual(1)
  expect(wrapper.find('div')).toMatchSelector('.c-address-form__summary')
})
