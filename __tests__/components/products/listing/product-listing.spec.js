// Libraries
import React from 'react'

// Component
import ProductListing from '../../../../src/components/products/listing/product-listing'
import ProductMenu from '../../../../src/components/products/listing/product-menu'
import ProductMenuOptions from '../../../../src/components/products/listing/product-menu-options'
import SearchFilters from '../../../../src/components/search/search-filters'

// Fixtures
import searchResultState from '../../../fixtures/search-results-state'

// Mock out the next/config
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    ALGOLIA_API_KEY: 'FAKE-API-KEY',
    ALGOLIA_APP_ID: 'FAKE-APP-ID',
    ALGOLIA_INDEX_NAME: 'FAKE-INDEX'
  }
}))

test('renders correctly', () => {
  // Arrange
  const searchState = {
    query: 'tray'
  }

  const onSearchStateChange = (nextSearchState) => (nextSearchState)

  // Act
  const wrapper = shallow(
    <ProductListing
      resultsState={searchResultState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
    />
  )

  const rootTree = wrapper.find('c-product-listing')

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(rootTree.find(ProductMenu))
  expect(rootTree.find(ProductMenuOptions))
  expect(rootTree.find(SearchFilters))
})
