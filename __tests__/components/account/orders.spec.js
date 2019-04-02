// Libraries
import React from 'react'

// Component
import AccountOrders from '../../../src/components/account/orders'
import OrderList from '../../../src/components/orders/order-list'

test('calls fetchOrders on mounting', () => {
  const fetchOrders = jest.fn()

  const wrapper = shallow(<AccountOrders
    fetchOrders={fetchOrders}
    orders={{
      data: []
    }}
  />, { disableLifecycleMethods: true })

  wrapper.instance().componentDidMount()

  expect(fetchOrders).toHaveBeenCalledTimes(1)
})

test('renders placeholder when there are no orders', () => {
  const wrapper = shallow(<AccountOrders
    orders={{
      data: []
    }}
  />, { disableLifecycleMethods: true })

  expect(wrapper).toIncludeText('No previous orders found.')
})

test('renders the order list when orders are present', () => {
  const wrapper = shallow(<AccountOrders
    orders={{
      data: [{}]
    }}
  />, { disableLifecycleMethods: true })

  expect(wrapper.find(OrderList)).toExist()
})
