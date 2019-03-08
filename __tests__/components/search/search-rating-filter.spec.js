// Libraries
import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'

// Components
import SearchRatingFilter from '../../../src/components/search/search-rating-filter'

test('renders rating options correctly', () => {
  // Arrange
  const ratings = [
    { label: '4', value: [], count: 3, isRefined: true },
    { label: '1', value: ['4', '1'], count: 8, isRefined: false },
    { label: '2', value: ['4', '2'], count: 4, isRefined: false },
    { label: '3', value: ['4', '3'], count: 3, isRefined: false },
    { label: '0', value: ['4', '0'], count: 2, isRefined: false }
  ]
  const refineMockFunction = jest.fn()
  const props = {
    attribute: 'product_rating',
    min: 0,
    max: 5,
    items: ratings,
    refine: refineMockFunction
  }

  // Act
  const wrapper = shallow(
    <Provider store={createMockStore({})} >
      <SearchRatingFilter {...props} />
    </Provider>
  )

  // Assert
  expect(wrapper.props().items).toBe(ratings)
  expect(wrapper.props().refine).toBe(refineMockFunction)
})
