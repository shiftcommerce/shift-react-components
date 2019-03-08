// Libraries
import React from 'react'

// Components
import EmailSignup from '../../../src/components/template-components/email-signup'

// Fixtures
import emailSignupData from '../../fixtures/email-signup'

test('shows an error message when submitting and empty form', () => {
  // Act
  const wrapper = mount(
    <EmailSignup componentData={emailSignupData} />
  )

  const submitButton = wrapper.find('button')
  submitButton.simulate('click')

  // Assert
  expect(wrapper).toMatchSnapshot()
  // jsdom reports 'Constraints not satisfied' for any form validation errors
  expect(wrapper).toIncludeText('Constraints not satisfied')
})

test('shows an error message when submitting an invalid email', () => {
  // Act
  const wrapper = mount(
    <EmailSignup componentData={emailSignupData} />
  )

  const inputField = wrapper.find('input')
  inputField.instance().value = 'test'

  const submitButton = wrapper.find('button')
  submitButton.simulate('click')

  // Assert
  expect(wrapper).toMatchSnapshot()
  // jsdom reports 'Constraints not satisfied' for any form validation errors
  expect(wrapper).toIncludeText('Constraints not satisfied')
})

test('shows the confirmation message when submitting something that looks like a valid email', () => {
  // Act
  const wrapper = mount(
    <EmailSignup componentData={emailSignupData} />
  )

  expect(wrapper).toIncludeText('Desktop header')
  expect(wrapper).toIncludeText('CTA Text')
  expect(wrapper).toIncludeText('Button text')

  const inputField = wrapper.find('input')
  inputField.instance().value = 'test@example.com'

  const submitButton = wrapper.find('button')
  submitButton.simulate('click')

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Confirmation text')
})
