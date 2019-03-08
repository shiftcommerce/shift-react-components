// Libraries
import React from 'react'

// Objects
import Image from '../../src/objects/image'

// skippable for now, not sure if needed anymore
test('renders nothing if no url provided', () => {
  // arrange

  // act
  const wrapper = shallow(
    <Image height='35px' width='125px' />
  )

  // assert
  expect(wrapper.equals(null)).toBe(true)
})

test('renders image if url provided', () => {
  // arrange

  // act
  const wrapper = shallow(
    <Image src='www.someimageurl.com' className='c-some_class' height='auto' width='90%' />
  )

  // assert
  expect(wrapper.find('img')).toHaveProp('src', 'www.someimageurl.com')
  expect(wrapper.find('img')).toHaveProp('height', 'auto')
  expect(wrapper.find('img')).toHaveProp('width', '90%')
  expect(wrapper.find('div')).toHaveClassName('c-some_class')
})
