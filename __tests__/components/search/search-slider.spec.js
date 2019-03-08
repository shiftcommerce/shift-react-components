// Libraries
import React from 'react'
import InputRange from 'react-input-range'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { InstantSearch } from 'react-instantsearch-dom'

// Components
import SearchSlider from '../../../src/components/search/search-slider'

test('renders the header', () => {
  // Arrange
  const initialState = {
    min: 5,
    max: 20,
    currentRefinement: { min: 6, max: 12 },
    refine: (nextState) => (nextState),
    canRefine: true,
    attribute: 'test'
  }

  const store = createMockStore(initialState)

  // Act
  const wrapper = mount(
    <Provider store={store} >
      <InstantSearch
        appId='test'
        apiKey='test'
        indexName='test'>
        <SearchSlider {...initialState} />
      </InstantSearch>
    </Provider>
  )

  // Assert
  const valueProp = { min: initialState.min, max: initialState.max }

  expect(wrapper.find(InputRange)).toHaveProp('value', valueProp)
})
