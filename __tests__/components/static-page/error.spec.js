// Libraries
import React from 'react'

// Components
import StaticPageError from '../../../src/components/static-page/error'

test('renders correct child elements and classnames', () => {
  const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <StaticPageError className={className}>
      { label }
    </StaticPageError>
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(label)
  expect(wrapper.find('div').first()).toHaveClassName(className)
})
