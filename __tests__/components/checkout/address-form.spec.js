// Libraries
import React from 'react'

// Components
import { AddressForm } from '../../../src/components/checkout/address-form'

// Fixtures
import countries from '../../fixtures/countries'

describe('Checkout Address Form', () => {
  test('renders the correct base form elements', () => {
    // Arrange
    const checkout = {
      testAddress: {
        collapsed: false,
        completed: false,
        errors: {},
        first_name: '',
        last_name: '',
        primary_phone: '',
        email: '',
        newsletterOptIn: false,
        saveToAddressBook: false,
        preferred_billing: false,
        preferred_shipping: false,
        label: '',
        selected: false,
        country_code: '',
        line_1: '',
        line_2: '',
        address2Shown: '',
        zipcode: '',
        city: '',
        state: '',
        companyName: '',
        companyNameShown: ''
      }
    }
    const addressBook = []

    // act
    const wrapper = mount(
      <AddressForm
        addressBook={addressBook}
        checkout={checkout}
        countries={countries}
        formName='testAddress'
      />
    )

    // assert
    expect(wrapper).toIncludeText('Country')
    expect(wrapper).toIncludeText('First Name')
    expect(wrapper).toIncludeText('Last Name')
    expect(wrapper).toIncludeText('Add Company Name')
    expect(wrapper).toIncludeText('Address 1')
    expect(wrapper).toIncludeText('Add Address 2')
    expect(wrapper).toIncludeText('Post Code')
    expect(wrapper).toIncludeText('City')
    expect(wrapper).toIncludeText('County')
    expect(wrapper).toIncludeText('Phone')
    expect(wrapper).toIncludeText('Email')
  })

  test('renders the values from the state', () => {
    // Arrange
    const address = {
      country_code: 'GB',
      first_name: 'First Name',
      last_name: 'Last Name',
      line_1: 'Test House',
      zipcode: 'TEST POSTCODE',
      city: 'Leeds',
      state: 'Yorkshire',
      primary_phone: '01234567890',
      email: 'test@example.com',
      collapsed: false,
      completed: false,
      errors: {}
    }
    const checkout = {
      testAddress: address
    }
    const addressBook = []

    // act
    const wrapper = mount(
      <AddressForm
        addressBook={addressBook}
        checkout={checkout}
        countries={countries}
        formName='testAddress'
      />
    )

    // assert
    expect(wrapper.find('#country_code')).toHaveValue(address.country_code)
    expect(wrapper.find('#first_name')).toHaveValue(address.first_name)
    expect(wrapper.find('#last_name')).toHaveValue(address.last_name)
    expect(wrapper.find('#line_1')).toHaveValue(address.line_1)
    expect(wrapper.find('#zipcode')).toHaveValue(address.zipcode)
    expect(wrapper.find('#city')).toHaveValue(address.city)
    expect(wrapper.find('#state')).toHaveValue(address.state)
    expect(wrapper.find('#primary_phone')).toHaveValue(address.primary_phone)
    expect(wrapper.find('#email')).toHaveValue(address.email)
  })

  test('renders additional elements for shipping form', () => {
    // Arrange
    const checkout = {
      shippingAddress: {
        collapsed: false,
        completed: false,
        errors: {}
      }
    }
    const addressBook = []

    // Act
    const wrapper = mount(
      <AddressForm
        addressBook={addressBook}
        checkout={checkout}
        countries={countries}
        formName='shippingAddress'
      />
    )

    // Assert - Additional fields for shipping form:
    expect(wrapper).toIncludeText('Sign up for Weekly Newsletters')
  })

  test('renders the additional company / address2 fields when enabled', () => {
    // Arrange
    const address = {
      companyName: 'Test Company',
      companyNameShown: true,
      line_2: 'Test Address Line 2',
      address2Shown: true,
      collapsed: false,
      completed: false,
      errors: {}
    }
    const checkout = {
      testAddress: address
    }
    const addressBook = []

    // act
    const wrapper = mount(
      <AddressForm
        addressBook={addressBook}
        checkout={checkout}
        countries={countries}
        formName='testAddress'
      />
    )

    // Assert - additional enabled fields:
    expect(wrapper.find('#companyName')).toHaveValue(address.companyName)
    expect(wrapper.find('#line_2')).toHaveValue(address.line_2)
  })

  test('does not render the additional company / address2 fields when not enabled', () => {
    // Arrange
    const address = {
      companyNameShown: false,
      address2Shown: false,
      collapsed: false,
      completed: false,
      errors: {}
    }
    const checkout = {
      testAddress: address
    }
    const addressBook = []

    // Act
    const wrapper = mount(
      <AddressForm
        addressBook={addressBook}
        checkout={checkout}
        countries={countries}
        formName='testAddress'
      />
    )

    // Assert - Input fields are not rendered:
    expect(wrapper.find('#companyName').length).toEqual(0)
    expect(wrapper.find('#line_2').length).toEqual(0)
  })

  describe('componentDidMount()', () => {
    test('calls autoFillAddress with currentAddress when currentAddress and autoFillAddress are present', () => {
      const autoFillAddress = jest.fn()
      const checkout = {
        testAddress: {
          errors: {}
        }
      }

      // Act
      const wrapper = shallow(
        <AddressForm
          addressBook={[]}
          autoFillAddress={autoFillAddress}
          checkout={checkout}
          currentAddress='currentAddress'
          formName='testAddress'
        />,
        { disableLifecycleMethods: true }
      )

      wrapper.instance().componentDidMount()

      expect(autoFillAddress).toHaveBeenCalledWith('currentAddress')
    })

    test("doesn't call autoFillAddress when currentAddress is not given", () => {
      const autoFillAddress = jest.fn()
      const checkout = {
        testAddress: {
          errors: {}
        }
      }

      // Act
      const wrapper = shallow(
        <AddressForm
          addressBook={[]}
          autoFillAddress={autoFillAddress}
          checkout={checkout}
          formName='testAddress'
        />,
        { disableLifecycleMethods: true }
      )

      wrapper.instance().componentDidMount()

      expect(autoFillAddress).not.toHaveBeenCalledWith('currentAddress')
    })
  })
})
