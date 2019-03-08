// Libraries
import React from 'react'

// Objects
import Breadcrumb from '../../src/objects/breadcrumb'

// Fixtures
import breadcrumbMenuTrail from '../fixtures/breadcrumbs'

test('renders correctly', () => {
  // Arrange & Act
  const wrapper = mount(
    <Breadcrumb trail={breadcrumbMenuTrail} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toContainMatchingElements(3, 'a.o-breadcrumb__link')
})
