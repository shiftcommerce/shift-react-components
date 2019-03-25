// Libraries
import React from 'react'

// Component
import ForgotPasswordForm from '../../../src/components/account/forgot-password-form'

describe('ForgotPasswordForm', () => {
  test('should render the form', () => {
    // Mock store
    const account = {
      errors: []
    }

    const dispatch = jest.fn()

    const wrapper = mount(<ForgotPasswordForm account={account} dispatch={dispatch} />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('Forgot Password')
    expect(wrapper).toIncludeText('Please enter your email address and submit. In doing this an email containing a special link will be mailed to you. Once received, click on this link and you will then have the opportunity to enter a new password.')
    expect(wrapper).toIncludeText('SUBMIT')
  })
})
