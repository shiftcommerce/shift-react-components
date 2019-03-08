// Libraries
import React from 'react'

// Components
import MiniBag from '../../../src/components/layout/minibag'

describe('Minibag', () => {
  test('renders the minibag links', () => {
    // arrange
    const cart = {
      line_items: [],
      line_items_count: 0
    }
    const className = 'dummy-classname'

    // act
    const wrapper = mount(
      <MiniBag cart={cart} className={className} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('Basket')
    expect(wrapper.find('.c-minibag__cart-image-count')).toIncludeText('0')
    expect(wrapper.find('.c-header__minibag')).toHaveClassName(className)
  })

  test('renders the line item quantity as expected, when line items are present', () => {
    // arrange
    const cart = {
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

    // act
    const wrapper = mount(
      <MiniBag cart={cart} />
    )

    // assert
    expect(wrapper.find('.c-minibag__cart-image-count')).toIncludeText('2')
  })

  test('renders an active checkout button when cart has items', () => {
    // arrange
    const cart = {
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

    // act
    const wrapper = mount(
      <MiniBag cart={cart} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.c-minibag__checkout .o-button a')).toIncludeText('Checkout')
    expect(wrapper.find('.c-minibag__checkout .o-button a')).not.toHaveClassName('o-button--disabled')
  })

  test('renders a disabled checkout button when cart is empty', () => {
    // arrange
    const cart = {
      line_items: [],
      line_items_count: 0
    }

    // act
    const wrapper = mount(
      <MiniBag cart={cart} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.c-minibag__checkout .o-button a')).toHaveClassName('o-button--disabled')
  })
})
