// Libraries
import React from 'react'

// Component
import Flash from '../../src/objects/flash'

test('renders the flash text', () => {
  const wrapper = shallow(<Flash text='Test text' />)

  expect(wrapper).toContainMatchingElement('.o-flash')
  expect(wrapper).toIncludeText('Test text')
})

test('renders the modifier class when given', () => {
  const wrapper = shallow(<Flash modifier='test' />)

  expect(wrapper).toContainMatchingElement('.o-flash')
  expect(wrapper).toContainMatchingElement('.o-flash--test')
})
