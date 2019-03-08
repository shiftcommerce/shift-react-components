// Libraries
import React from 'react'

// Components
import ProductListingCard from '../../../../src/components/products/listing/product-listing-card'

// Fixtures
import productSearchHit from '../../../fixtures/product-search-hit'

test('renders ProductListingCard correctly', () => {
  // Act

  // at the moment we dont pass the image size throught algolia,
  // the fixture will need updating when we do. At the moment
  // product listing is set to default to 280

  const wrapper = mount(
    <ProductListingCard
      title={productSearchHit.product_title}
      assetFileUrl={productSearchHit.product_assets[0].url}
      assetFileAltText={productSearchHit.product_assets[0].alt_text}
      minPrice={productSearchHit.variant_meta_data.eu.price}
      maxPrice={productSearchHit.variant_meta_data.eu.price}
      productPath={productSearchHit.product_path}
      productRating={productSearchHit.product_rating}
      imageHeight={productSearchHit.image_height}
      imageWidth={productSearchHit.image_width}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.c-product-price')).toIncludeText(`£${productSearchHit.variant_meta_data.eu.price}`)
  expect(wrapper.find('.c-product-listing-card__rating')).toHaveClassName('c-product-listing-card__rating')

  // Assert lazyload component is loading image
  expect(wrapper.find('.lazyload-placeholder')).toHaveClassName('lazyload-placeholder')
})
