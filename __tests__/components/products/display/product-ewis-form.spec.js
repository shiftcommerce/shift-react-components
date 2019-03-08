// Libraries
import React from 'react'

// Components
import ProductEwisForm from '../../../../src/components/products/display/product-ewis-form'

test('renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <ProductEwisForm />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('input')).toHaveClassName('c-ewis-form__input-field')
  expect(wrapper.find('button')).toIncludeText('Email When in Stock')
})
