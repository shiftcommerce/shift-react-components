// Libraries
import React from 'react'

// Components
import StaticPageErrorBody from '../../../src/components/static-page/error-body'

test('renders correct child elements and classnames', () => {
  const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  const className = 'dummy-classname'

  // act
  const wrapper = mount(
    <StaticPageErrorBody className={className}>
      { label }
    </StaticPageErrorBody>
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Oh no, something went wrong.')
  expect(wrapper).toIncludeText(label)
  expect(wrapper.find('div')).toHaveClassName(className)
})

test('renders correct title and subtitle when passed through as props', () => {
  const strings = {
    title: 'Dummy Title',
    subtitle: 'Dummy Subtitle'
  }

  // act
  const wrapper = mount(
    <StaticPageErrorBody title={strings.title} subtitle={strings.subtitle} />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(strings.title)
  expect(wrapper).toIncludeText(strings.subtitle)
})
