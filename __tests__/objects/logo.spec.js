// Libraries
import React from 'react'

// Object
import Logo from '../../src/objects/logo'

test('renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <Logo className='o-header__logo' />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
})
