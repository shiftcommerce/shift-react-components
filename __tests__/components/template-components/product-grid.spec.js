// Libraries
import React from 'react'

// Components
import ProductGrid from '../../../src/components/template-components/product-grid'

// Fixtures
import productGridData from '../../fixtures/product-grid'

test('ProductGrid component renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <ProductGrid
      componentData={productGridData}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(productGridData.header)
  expect(wrapper).toIncludeText(productGridData.products[0].title)
  expect(wrapper).toIncludeText(productGridData.products[1].title)
  expect(wrapper).toIncludeText(productGridData.products[2].title)
  expect(wrapper).toIncludeText(productGridData.products[3].title)

  // WIP: can probably do without `/slug?slug=` here, but the temporary
  // Link component adds it for some reason
  expect(wrapper.find('a').first()).toHaveProp('href', `/slug?slug=${productGridData.products[0].canonical_path}`)
  expect(wrapper.find('.o-template-component__cat-button').children()).toIncludeText(productGridData.cat_text)
})
