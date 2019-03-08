// Libraries
import React from 'react'

// Object
import VariantSelector from '../../src/objects/variant-selector'

// Fixtures
import product from '../fixtures/product'

test('renders correctly', () => {
  // Arrange
  const changeVariant = jest.fn()

  // Act
  const wrapper = mount(
    <VariantSelector name='line_item[item_id]' prompt='Select a Size' onClick={changeVariant} variants={product.variants} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  wrapper.find('div.o-variant-selector').simulate('click', { target: { value: 'Variant 1' } })
  expect(changeVariant).toHaveBeenCalled()
})

test('renders a button for each variant', () => {
  // Arrange
  const changeVariant = jest.fn()

  // Act
  const wrapper = mount(
    <VariantSelector name='line_item[item_id]' prompt='Select a Size' onClick={changeVariant} variants={product.variants} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('button.c-product-display__option-button')).toHaveLength(product.variants.length)
})
