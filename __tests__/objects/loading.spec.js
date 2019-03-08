// Libraries
import React from 'react'

// Objects
import Loading from '../../src/objects/loading'

test('loading spinner renders correctly', () => {
  // Act
  const wrapper = shallow(<Loading />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toHaveClassName('o-loading')
})
