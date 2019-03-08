// Libraries
import React from 'react'

// Objects
import Input from '../../src/objects/input'

test('renders text input field containing value', () => {
  // arrange
  // 10 Character Random String
  const value = Math.random().toString(36).substring(2, 12)

  // act
  const wrapper = mount(
    <Input value={value} />
  )

  // assert
  expect(wrapper.find('input')).toHaveProp('value', value)
})

test('renders text input field containing placeholder', () => {
  // arrange
  const placeholder = Math.random().toString(36).substring(2, 12)

  // act
  const wrapper = mount(
    <Input placeholder={placeholder} />
  )

  // assert
  expect(wrapper.find('input')).toHaveProp('placeholder', placeholder)
})

test('renders text input field with given name', () => {
  // arrange
  const name = Math.random().toString(36).substring(2, 12)

  // act
  const wrapper = mount(
    <Input name={name} />
  )

  // assert
  expect(wrapper.find('input')).toHaveProp('name', name)
})

test('defaults to text type', () => {
  // arrange
  const type = 'text'

  // act
  const wrapper = mount(
    <Input type={type} />
  )

  // assert
  expect(wrapper.find('input')).toHaveProp('type', 'text')
})

test('sets input field type when passed in', () => {
  // arrange
  const type = 'number'
  // act
  const wrapper = mount(
    <Input type={type} />
  )

  // assert
  expect(wrapper.find('input')).toHaveProp('type', type)
})

test('renders text input label containing label text', () => {
  // arrange
  const label = 'My Input'

  // act
  const wrapper = mount(
    <Input label={label} />
  )

  // assert
  expect(wrapper.find('label')).toIncludeText(label)
})

test('renders text input label for a specific input name', () => {
  // arrange
  const label = 'My Input'
  const name = 'my_input_id'

  // act
  const wrapper = mount(
    <Input label={label} name={name} />
  )

  // assert
  expect(wrapper.find('label')).toHaveProp('htmlFor', name)
})
