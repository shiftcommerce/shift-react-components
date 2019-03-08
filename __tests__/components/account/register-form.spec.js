// Libraries
import React from 'react'

// Component
import RegisterForm from '../../../src/components/account/register-form'

describe('RegisterForm', () => {
  test('should render the form', () => {
    // Mock store
    const registration = {
      errors: []
    }

    const dispatch = jest.fn()

    const wrapper = mount(<RegisterForm registration={registration} dispatch={dispatch} />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('First Name *')
    expect(wrapper).toIncludeText('Email *')
    expect(wrapper).toIncludeText('Confirm Email *')
    expect(wrapper).toIncludeText('Password *')
    expect(wrapper).toIncludeText('Confirm Password *')
    expect(wrapper).toIncludeText('* Denotes required fields')
    expect(wrapper).toIncludeText('Create Account')
  })
})
