// Libraries
import React from 'react'

// Components
import CustomHead from '../../../src/components/layout/custom-head'
import Layout from '../../../src/components/layout/layout'
import Minibag from '../../../src/components/layout/minibag'
import NavBar from '../../../src/components/navigation/navbar'

// Objects
import Logo from '../../../src/objects/logo'

// Fixtures
import menu from '../../fixtures/menu'

test('renders the header', () => {
  // Arrange
  const initialState = {
    shrunk: false,
    toggleShowClass: false,
    skipHeader: true,
    menu: menu
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      {...initialState}
    />
  )

  const header = wrapper.find('div.o-header')

  // Assert
  expect(header).toExist()
  expect(header).toContainReact(<Logo className='o-header__logo' />)
  expect(header.find(Minibag)).toExist()
  expect(wrapper).toMatchSnapshot()
})

test('renders the navbar for non-checkout pages', () => {
  // Arrange
  const initialState = {
    shrunk: false,
    toggleShowClass: false,
    skipHeader: true,
    menu: menu
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      {...initialState}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(NavBar)).toExist()
})

test('renders the footer', () => {
  // Act
  const wrapper = shallow(
    <Layout router={{ pathname: '/' }} />
  )

  // Assert
  expect(wrapper.find('div.o-footer')).toIncludeText('Footer')
  expect(wrapper).toMatchSnapshot()
})

test('renders the children inside it', () => {
  // Arrange
  const initialState = {
    shrunk: false,
    toggleShowClass: false,
    skipHeader: true,
    menu: menu
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      {...initialState} >
      Content
    </Layout >
  )

  // Assert
  expect(wrapper.find('div.o-body')).toIncludeText('Content')
  expect(wrapper).toMatchSnapshot()
})

test('for checkout pages renders the custom head only', () => {
  // Arrange
  const initialState = {
    shrunk: false,
    toggleShowClass: false,
    skipHeader: false,
    menu: menu
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/checkout/shipping-address' }}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      {...initialState}
    />
  )

  // Assert
  expect(wrapper.find(NavBar).exists()).toBe(false)
  expect(wrapper.find(CustomHead).exists()).toBe(false)
})
