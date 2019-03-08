// Libraries
import React from 'react'

// Components
import GenericGrid from '../../../src/components/template-components/generic-grid'

// Fixtures
import genericGridData from '../../fixtures/generic-grid'

test('GenericGrid component renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <GenericGrid
      componentData={genericGridData}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(genericGridData.header)
  expect(wrapper).toIncludeText(genericGridData.slide1_text)
  expect(wrapper).toIncludeText(genericGridData.slide2_text)
  expect(wrapper).toIncludeText(genericGridData.slide3_text)

  expect(wrapper.find('a').first()).toHaveProp('href', genericGridData.slide1_url[0].canonical_path)
  expect(wrapper.find('.o-template-component__cat-button').children()).toIncludeText(genericGridData.cat_text)
})
