// Libraries
import React from 'react'

// Components
import SearchFilters from '../../../src/components/search/search-filters'

test('renders the algolia filter component with children', () => {
  // Arrange
  const facets = [{ source: 'volume', label: 'volume', searchable: false, aggregation_type: 'list' }]

  // Act
  const wrapper = shallow(<SearchFilters filtersShown facets={facets} />)

  // Assert
  expect(wrapper.find('.c-product-listing-filter__body-option')).toHaveLength(facets.length + 2)
  facets.forEach((facet, index) => {
    expect(wrapper.find('.c-product-listing-filter__body-option').at(index).dive()).toIncludeText(facet.source)
  })
})

test('algolia filters turns every facet into a refinement list', () => {
  // Arrange
  const facets = [
    { source: 'volume', label: 'volume', searchable: false, aggregation_type: 'list' },
    { source: 'diameter', label: 'diameter', searchable: false, aggregation_type: 'list' },
    { source: 'colour', label: 'colour', searchable: false, aggregation_type: 'list' }
  ]

  // Act
  const wrapper = shallow(<SearchFilters filtersShown facets={facets} />)

  // Assert
  // We add 2 to the expected length here to account for Rating and Price which are
  // not facets returned from the API, they are hardcoded into algolia-filters.js
  expect(wrapper.find('.c-product-listing-filter__body-option')).toHaveLength(facets.length + 2)
  facets.forEach((facet, index) => {
    expect(wrapper.find('.c-product-listing-filter__body-option').at(index).dive()).toIncludeText(facet.source)
  })
})
