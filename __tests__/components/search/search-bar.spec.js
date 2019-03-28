// Libraries
import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { InstantSearch } from 'react-instantsearch-dom'

// Components
import { SearchBar } from '../../../src/components/search/search-bar'

test('Renders the algolia SearchBox and checks the placeholder', () => {
  // Arrange - provide an initial state for the search
  const initialState = {
    loading: true,
    error: false,
    query: null,
    search: {}
  }

  const store = createMockStore(initialState)

  // Act
  const wrapper = mount(
    <Provider store={store} >
      <InstantSearch
        appId='test'
        apiKey='test'
        indexName='test'>
        <SearchBar />
      </InstantSearch>
    </Provider>
  )

  // Assert
  expect(wrapper.find('.c-searchbox__input').prop('placeholder')).toBe('Search here…')
})
