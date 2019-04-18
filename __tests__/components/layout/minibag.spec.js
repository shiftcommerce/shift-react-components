// Libraries
import React from 'react'

// Components
import MiniBag from '../../../src/components/layout/minibag'

describe('Minibag', () => {
  test('doesnt render when there is no lineitems', () => {
    // arrange
    const cart = {
      line_items: [],
      line_items_count: 0
    }
    const className = 'dummy-classname'

    // act
    const wrapper = mount(
      <MiniBag cart={cart} className={className} miniBagDisplayed={true} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
  })

  test('doesnt render when miniBagDisplayed is false', () => {
    // arrange
    const cart = {
      line_items: [
        {
          id: '311',
          item: {
            picture_url: 'https://shift-platform-dev.s3-eu-west-1.amazonaws.com/uploads/asset_file/asset_file/131/1537803713.5364385-SCS-04-CJ_coffee_jug_600ml.jpg',
            product: {
              canonical_path: '/jugs/seed_product_40',
              slug: 'jugs/seed_product_40',
              title: 'First product'
            },
            title: 'First variant'
          },
          item_id: 321,
          item_type: 'Variant',
          line_item_discounts: [
            {
              id: '2a720d8d-ae39-462e-b2e2-4c49ca5c8846',
              line_item_number: 1,
              promotion_id: 21,
              total: 1.5
            }
          ],
          sku: '3008557600817',
          stock_available_level: 85,
          sub_total: 6.77,
          total: 5.27,
          total_discount: 1.5,
          unit_quantity: 1
        },
        {
          id: '310',
          item: {
            picture_url: 'https://shift-platform-dev.s3-eu-west-1.amazonaws.com/uploads/asset_file/asset_file/131/1537803713.5364385-SCS-04-CJ_coffee_jug_600ml.jpg',
            product: {
              canonical_path: '/jugs/seed_product_39',
              slug: 'jugs/seed_product_39',
              title: 'Second product'
            },
            title: 'Second variant'
          },
          item_id: 321,
          item_type: 'Variant',
          line_item_discounts: [
            {
              id: '2a720d8d-ae39-462e-b2e2-4c49ca5c8846',
              line_item_number: 1,
              promotion_id: 21,
              total: 1.5
            }
          ],
          sku: '3008557600817',
          stock_available_level: 85,
          sub_total: 6.77,
          total: 5.27,
          total_discount: 1.5,
          unit_quantity: 1
        }
      ],
      line_items_count: 2
    }

    // act
    const wrapper = mount(
      <MiniBag cart={cart} miniBagDisplayed={false} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
  })

  test('renders when miniBagDisplayed is true', () => {
    // arrange
    const cart = {
      line_items: [
        {
          id: '311',
          item: {
            picture_url: 'https://shift-platform-dev.s3-eu-west-1.amazonaws.com/uploads/asset_file/asset_file/131/1537803713.5364385-SCS-04-CJ_coffee_jug_600ml.jpg',
            product: {
              canonical_path: '/jugs/seed_product_40',
              slug: 'jugs/seed_product_40',
              title: 'First product'
            },
            title: 'First variant',
            sku: '3008557600817'
          },
          item_id: 321,
          item_type: 'Variant',
          line_item_discounts: [
            {
              id: '2a720d8d-ae39-462e-b2e2-4c49ca5c8846',
              line_item_number: 1,
              promotion_id: 21,
              total: 1.5
            }
          ],
          stock_available_level: 85,
          sub_total: 6.77,
          total: 5.27,
          total_discount: 1.5,
          unit_quantity: 1
        },
        {
          id: '310',
          item: {
            picture_url: 'https://shift-platform-dev.s3-eu-west-1.amazonaws.com/uploads/asset_file/asset_file/131/1537803713.5364385-SCS-04-CJ_coffee_jug_600ml.jpg',
            product: {
              canonical_path: '/jugs/seed_product_39',
              slug: 'jugs/seed_product_39',
              title: 'Second product'
            },
            title: 'Second variant',
            sku: '3008557600818'
          },
          item_id: 321,
          item_type: 'Variant',
          line_item_discounts: [
            {
              id: '2a720d8d-ae39-462e-b2e2-4c49ca5c8846',
              line_item_number: 1,
              promotion_id: 21,
              total: 1.5
            }
          ],
          stock_available_level: 85,
          sub_total: 6.77,
          total: 5.27,
          total_discount: 1.5,
          unit_quantity: 1
        }
      ],
      line_items_count: 2,
      discount_summaries: []
    }

    // act
    const wrapper = mount(
      <MiniBag cart={cart} miniBagDisplayed={true} onItemQuantityUpdated={jest.fn()} />
    )

    // assert
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toIncludeText('Shopping Basket')
    const firstItem = wrapper.find('.c-minibag__line-items-section').first()
    expect(firstItem).toIncludeText('Second product - Second variant')
  })
})
