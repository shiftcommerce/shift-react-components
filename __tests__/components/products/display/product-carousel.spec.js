// Libraries
import React from 'react'

// Components
import ProductCarousel from '../../../../src/components/products/display/product-carousel'

// Fixtures
import product from '../../../fixtures/product'

test('renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <ProductCarousel assetFiles={product.asset_files} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('div').at(1)).toHaveClassName('.carousel.carousel-slider')
})
