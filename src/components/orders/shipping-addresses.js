// Libraries
import React, { PureComponent } from 'react'

class ShippingAddresses extends PureComponent {
  render () {
    return (
      <>
        { this.props.addresses.map((shippingAddress) => {
          return (
            <div className='c-order-history__shipping-address' key={shippingAddress.id}>
              <p className='u-bold'>{ shippingAddress.name }</p>
              <p>{ shippingAddress.company }</p>
              <p>{ shippingAddress.lines.join() }</p>
              <p>{ shippingAddress.city }</p>
              <p>{ shippingAddress.state }</p>
              <p>{ shippingAddress.postcode }</p>
              <p>{ shippingAddress.country }</p>
            </div>
          )
        })}
      </>
    )
  }
}

export default ShippingAddresses
