// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'

class AccountOrders extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.Link = componentMapping('Link')
    this.Loading = componentMapping('Loading')
    this.OrderList = componentMapping('OrderList')
  }

  componentDidMount () {
    this.props.fetchOrders()
  }

  renderOrdersList (orders) {
    if (orders.data.length === 0) {
      return (<p>No previous orders found.</p>)
    }

    return (<this.OrderList orders={orders} />)
  }

  renderAccountBanner () {
    return (
      <div className='c-order-history__nav'>
        <h2>Order History</h2>
      </div>
    )
  }

  render () {
    const { orders, orders: { loading } } = this.props

    if (loading) {
      return (
        <>
          <div className='c-order-history'>
            { this.renderAccountBanner() }
            <this.Loading />
          </div>
        </>
      )
    } else {
      return (
        <div className='c-order-history'>
          { this.renderAccountBanner() }
          { this.renderOrdersList(orders) }
        </div>
      )
    }
  }
}

export default AccountOrders
