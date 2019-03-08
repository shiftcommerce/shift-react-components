import React from 'react'

// Components
import HeroFull from '../../../src/components/template-components/hero-full'

// Fixtures
import heroImageData from '../../fixtures/hero-full'

test('renders the full HeroImage component', () => {
  // Act
  const wrapper = mount(
    <HeroFull
      componentData={heroImageData}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()

  // Assert lazyload component is loading image
  expect(wrapper.find('.lazyload-placeholder')).toHaveClassName('lazyload-placeholder')
})
