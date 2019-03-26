// Libraries
import React from 'react'

// Component
import PasswordResetForm from '../../../src/components/account/password-reset-form'

describe('PasswordResetForm', () => {
  test('should render the form', () => {
    // Mock store
    const account = {
      errors: []
    }

    const dispatch = jest.fn()

    const wrapper = mount(<PasswordResetForm account={account} dispatch={dispatch} />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('Password Reset') 
    expect(wrapper).toIncludeText('Please enter your new password')
    expect(wrapper).toIncludeText('submit')
  })
})
