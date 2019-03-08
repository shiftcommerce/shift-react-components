// Libraries
import React from 'react'

// Objects
import Rating from '../../src/objects/rating'

test('renders correctly without a rating', () => {
  // Act
  const wrapper = shallow(<Rating />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toContainMatchingElements(0, '.o-rating__star--fill')
  expect(wrapper).toContainMatchingElements(5, '.o-rating__star--empty')
})

test('renders correctly when passed a rating', () => {
  // Arrange
  const exampleRating = 4

  // Act
  const wrapper = shallow(<Rating rating={exampleRating} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toContainMatchingElements(4, '.o-rating__star--fill')
  expect(wrapper).toContainMatchingElements(1, '.o-rating__star--empty')
})
