// Libraries
import React from 'react'
import { Formik, Field } from 'formik'

// Component
import AccountDetails from '../../../src/components/account/details'
import Button from '../../../src/objects/button'

test('renders the form', () => {
  const wrapper = mount(<AccountDetails />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Formik)).toExist()
  expect(wrapper.find(Field).length).toEqual(4)
  expect(wrapper.find(Button)).toExist()
})
