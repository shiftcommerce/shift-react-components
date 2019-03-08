// Libraries
import React from 'react'

// Objects
import Checkbox from '../../src/objects/checkbox'

test('renders correctly', () => {
  // Arrange
  let fieldOption = {
    label: 'Sign up for Weekly Newsletters (optional)',
    name: 'newsletterOptIn',
    value: true
  }

  // Act
  const wrapper = mount(
    <Checkbox
      label={fieldOption.label}
      name={fieldOption.name}
      checked={!!fieldOption.value}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('label')).toIncludeText(fieldOption.label)
  expect(wrapper.find('input')).toHaveProp('name', fieldOption.name)
  expect(wrapper.find('input')).toHaveProp('checked', fieldOption.value)
})
