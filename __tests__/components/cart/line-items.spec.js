// Libraries
import React from 'react'

// Components
import Image from '../../../src/objects/image'
import LineItems from '../../../src/components/cart/line-items'

// Objects
import DropdownSelect from '../../../src/objects/dropdown-select'

// Fixtures
import cartFixture from '../../fixtures/cart'

test('renders line items correctly, on initial load', () => {
  // Act
  const wrapper = mount(
    <LineItems
      lineItems={cartFixture.line_items}
      lineItemsCount={cartFixture.line_items_count}
      updateQuantity={jest.fn()}
    />
  )

  // Assert
  const lineItem = cartFixture.line_items[0]
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(lineItem.item.product.title)
  expect(wrapper).toContainReact(<Image className='c-line-items__image' src={lineItem.item.picture_url} alt={lineItem.item.title} key={lineItem.item.product.slug} aria-label={lineItem.item.title} />)
  expect(wrapper.find('select').props().value).toBe(lineItem.unit_quantity)
  expect(wrapper).toIncludeText(lineItem.sku)
  expect(wrapper).toIncludeText((lineItem.item.price * lineItem.unit_quantity) - (lineItem.total_discount))
})

test('renders line items sorted by their id', () => {
  // Arrange
  const lineItems = [
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
          id: '2a720d8d-ae39-462e-b2e2-4c49ca5c8847',
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
  ]

  // Act
  const wrapper = shallow(
    <LineItems
      lineItems={lineItems}
      lineItemsCount={2}
    />
  )

  // Assert
  const firstItem = wrapper.find('.c-line-items__sections').first()
  expect(firstItem).toIncludeText('Second product - Second variant')
})

test('trigger updateQuantity function, on change of line item quantity', () => {
  const updateQuantity = jest.fn()

  // act
  const wrapper = mount(
    <LineItems
      lineItems={cartFixture.line_items}
      lineItemsCount={cartFixture.line_items_count}
      updateQuantity={updateQuantity}
    />
  )

  // assert
  // Below isn't ideal but wrapper.find('select').simulate('change') causes Node to crash for some reason
  wrapper.find('select').prop('onChange')({ target: { value: {} } })
  expect(wrapper).toMatchSnapshot()
  expect(updateQuantity).toHaveBeenCalled()
})

test('renders line item quantity if updateQuantity function is not provided', () => {
  // act
  const wrapper = mount(
    <LineItems
      lineItems={cartFixture.line_items}
      lineItemsCount={cartFixture.line_items_count}
    />
  )

  // assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText(cartFixture.line_items_count)
  expect(wrapper.find(DropdownSelect).length).toEqual(0)
})
