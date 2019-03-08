// Libraries
import React from 'react'

// Component
import ProductMenuOptions from '../../../../src/components/products/listing/product-menu-options'

// Objects
import Breadcrumb from '../../../../src/objects/breadcrumb'

test('renders correctly', () => {
  // Arrange
  const initialProps = {
    toggleFiltering: () => (null),
    filterCount: 3,
    indexName: 'test_index'
  }

  // Act
  const wrapper = shallow(
    <ProductMenuOptions {...initialProps} />
  )

  const rootTree = wrapper.find('.c-product-listing__menu-options')

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(rootTree.find(Breadcrumb))
})
