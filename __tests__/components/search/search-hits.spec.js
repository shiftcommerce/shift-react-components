// Libraries
import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { InstantSearch } from 'react-instantsearch-dom'

// Components
import ProductListingCard from '../../../src/components/products/listing/product-listing-card'
import SearchHits, { SearchResults } from '../../../src/components/search/search-hits'

// Fixtures
import resultsState from '../../fixtures/search-results-state'

test('renders the algolia hits', () => {
  // Arrange
  const context = {
    ais: {
      store: {
        getState: () => (resultsState),
        setState: () => (null),
        subscribe: () => (null)
      },
      widgetsManager: {
        registerWidget: () => (null)
      },
      mainTargetedIndex: 'reference_variants',
      onSearchParameters: () => (null)
    }
  }

  // Act
  const wrapper = mount(<SearchHits />, { context })

  // Assert
  expect(wrapper).toMatchSnapshot()
})
