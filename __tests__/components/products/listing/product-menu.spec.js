// Libraries
import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { InstantSearch } from 'react-instantsearch-dom'

// Component
import ProductMenu from '../../../../src/components/products/listing/product-menu'

test('renders correctly', () => {
  // Arrange
  const initialProps = {
    title: 'Super Products',
    searchState: {
      query: 'coffee'
    }
  }

  const store = createMockStore(initialProps)

  // Act
  const wrapper = mount(
    <Provider store={store} >
      <InstantSearch
        appId='test'
        apiKey='test'
        indexName='test'>
        <ProductMenu {...initialProps} />
      </InstantSearch>
    </Provider>
  )

  // Assert
  expect(wrapper.find('.c-product-listing__menu-description-title')).toIncludeText(initialProps.title)
})
