// Libraries
import React from 'react'

// Component
import ProductPrice from '../../../../src/components/products/display/product-price'

// Fixtures
import ProductWithVariantsWithSimilarPrice from '../../../fixtures/product-with-variants-with-similar-price'
import ProductWithVariantsWithDifferentPrices from '../../../fixtures/product-with-variants-with-different-prices'

test('renders correctly if variants have similar price', () => {
  // Act
  const wrapper = mount(
    <ProductPrice
      minPrice={ProductWithVariantsWithSimilarPrice.min_current_price}
      maxPrice={ProductWithVariantsWithSimilarPrice.max_current_price} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('£10.00')
})

test('renders correctly if variants have different prices', () => {
  // Act
  const wrapper = mount(
    <ProductPrice
      minPrice={ProductWithVariantsWithDifferentPrices.min_current_price}
      maxPrice={ProductWithVariantsWithDifferentPrices.max_current_price} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('£10.00 - £12.00')
})
