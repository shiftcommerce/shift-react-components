// Libraries
import React from 'react'

// Component
import LoginForm from '../../../src/components/account/login-form'

describe('LoginForm', () => {
  test('should render the form', () => {
    // Mock store
    const login = {
      errors: []
    }

    const dispatch = jest.fn()

    const wrapper = mount(<LoginForm login={login} dispatch={dispatch} />)

    // Assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('Email *')
    expect(wrapper).toIncludeText('Password *')
    expect(wrapper).toIncludeText('Remember me')
    expect(wrapper).toIncludeText('CONTINUE SECURELY')
  })
})
