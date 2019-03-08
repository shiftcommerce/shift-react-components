import React from 'react'

// Components
import BannerImage from '../../../src/components/template-components/banner-image'

// Fixtures
import bannerImageData from '../../fixtures/banner-image'

test('BannerImage component renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <BannerImage
      componentData={bannerImageData}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()

  // Assert lazyload component is loading image
  expect(wrapper.find('.lazyload-placeholder')).toHaveClassName('lazyload-placeholder')
})
