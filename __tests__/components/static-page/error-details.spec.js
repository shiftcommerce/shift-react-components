// Libraries
import React from 'react'

// Components
import StaticPageErrorDetails from '../../../src/components/static-page/error-details'

const strings = [
  'Lorem ipsum',
  'Dolor sit amet',
  'Consectetur adipiscing elit'
]

const errors = {
  Endpoint: JSON.stringify(strings[0]),
  Query: JSON.stringify(strings[1]),
  'Response data': JSON.stringify(strings[2])
}

test('renders correct props and classnames', () => {
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <StaticPageErrorDetails className={className} isProduction={false} errorDetails={errors} detailsShown />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(`Endpoint"${strings[0]}"`)
  expect(wrapper).toIncludeText(`Query"${strings[1]}"`)
  expect(wrapper).toIncludeText(`Response data"${strings[2]}"`)
  expect(wrapper.find('div').first()).toHaveClassName(className)
})

test('renders nothing if isProduction is set to true', () => {
  // act
  const wrapper = shallow(
    <StaticPageErrorDetails isProduction errorDetails={errors} />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.equals(null)).toBe(true)
})
