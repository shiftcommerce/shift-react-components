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
    menu: menu,
    minibagDisplayed: false,
    cart: {
      line_items: [],
      line_items_count: 0
    }
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      search={{}}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      minibagDisplayed={initialState.minibagDisplayed}
      cart={initialState.cart}
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
    menu: menu,
    minibagDisplayed: false,
    cart: {
      line_items: [],
      line_items_count: 0
    }
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      search={{}}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      minibagDisplayed={initialState.minibagDisplayed}
      {...initialState}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(NavBar)).toExist()
})

test('renders the footer', () => {
  // arrange
  const cart = {
    line_items: [],
    line_items_count: 0
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      search={{}}
      cart={cart}
    />
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
    menu: menu,
    minibagDisplayed: false,
    cart: {
      line_items: [],
      line_items_count: 0
    }
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/' }}
      search={{}}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      minibagDisplayed={initialState.minibagDisplayed}
      cart={initialState.cart}
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
    menu: menu,
    minibagDisplayed: false,
    cart: {
      line_items: [],
      line_items_count: 0
    }
  }

  // Act
  const wrapper = shallow(
    <Layout
      router={{ pathname: '/checkout/shipping-address' }}
      search={{}}
      shrunk={initialState.shrunk}
      ShowClass={initialState.toggleShowClass}
      skipHeader={initialState.skipHeader}
      cart={initialState.cart}
      {...initialState}
    />
  )

  // Assert
  expect(wrapper.find(NavBar).exists()).toBe(false)
  expect(wrapper.find(CustomHead).exists()).toBe(false)
})

describe('basket', () => {
  test('renders the basket', () => {
    // Arrange
    const initialState = {
      shrunk: false,
      toggleShowClass: false,
      skipHeader: true,
      menu: menu,
      minibagDisplayed: false,
      cart: {
        line_items: [],
        line_items_count: 0
      }
    }

    // Act
    const wrapper = shallow(
      <Layout
        router={{ pathname: '/' }}
        search={{}}
        shrunk={initialState.shrunk}
        ShowClass={initialState.toggleShowClass}
        skipHeader={initialState.skipHeader}
        cart={initialState.cart}
        {...initialState}
      />
    )

    // Assert
    expect(wrapper).toIncludeText('Basket')
    expect(wrapper.find('.c-minibag__cart-image-count')).toIncludeText('0')
  })

  test('renders the line item quantity as expected, when line items are present', () => {
    // Arrange
    const initialState = {
      shrunk: false,
      toggleShowClass: false,
      skipHeader: true,
      menu: menu,
      minibagDisplayed: false,
      cart: {
        line_items: [
          {
            title: 'test',
            price: 10,
            discount: 0,
            quantity: 2,
            sku: '123',
            image_url: '',
            size: 'size - 8',
            productSku: '1231',
            productID: 1
          }
        ],
        line_items_count: 2
      }
    }

    // Act
    const wrapper = shallow(
      <Layout
        router={{ pathname: '/' }}
        search={{}}
        shrunk={initialState.shrunk}
        ShowClass={initialState.toggleShowClass}
        skipHeader={initialState.skipHeader}
        cart={initialState.cart}
        {...initialState}
      />
    )

    // Assert
    expect(wrapper.find('.c-minibag__cart-image-count')).toIncludeText('2')
  })
})
