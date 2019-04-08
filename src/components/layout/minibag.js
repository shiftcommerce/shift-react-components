// Libraries
import React, { PureComponent } from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'
import { decimalPrice } from '../../lib/decimal-price'
 
class Minibag extends PureComponent {
  constructor () {
    super()

    this.Button = componentMapping('Button')
    this.Image = componentMapping('Image')
    this.Link = componentMapping('Link')
  }



  renderLineItems (lineItems) {
    const cartData = lineItems.sort((item1, item2) => parseInt(item1.id) - parseInt(item2.id)).map((lineItem) => {
      return (
        <div className='c-minibag__line-item' key={lineItem.item.sku}>
          <div className='c-minibag__line-item-information'>
            <div className='c-minibag__line-item-information-title'>
              <p>{`${lineItem.item.product.title} - ${lineItem.item.title}`}</p>
              <a className='c-minibag__line-item-total'>&pound;{decimalPrice(lineItem.total)}</a>
              <a className='c-minibag__line-item-subtotal'>&pound;{decimalPrice(lineItem.sub_total)}</a>
            </div>
            <div>
              <p className='c-minibag__line-item-information-params'>QUANTITY: {lineItem.unit_quantity}</p>
              <a className='c-minibag__line-item--delete' data-id={lineItem.id} onClick={this.props.deleteItem} >
                Remove
              </a>
            </div>
          </div>
          <div className='c-minibag__line-item-images'>
            <this.Link href={`/slug?slug=${lineItem.item.product.canonical_path}`}>
              <this.Image className='c-minibag__line-item-image' src={lineItem.item.picture_url} alt={lineItem.item.title} key={lineItem.item.product.slug} aria-label={lineItem.item.title} />
            </this.Link>
          </div>
        </div>
      )
    })

    return cartData
  }

  renderMiniBagDropdown(lineItemsCount, lineItems, total, shippingTotal) {
    const miniBagTotal = total - shippingTotal
    return <>
      <div className='c-minibag__overlay' onClick={this.props.toggleMiniBag} />
      <div className='c-minibag__dropdown'>
        <div className='c-minibag__dropdown-container'>
          <section className='c-minibag__dropdown-header'>
            <h1 className='c-minibag__dropdown-title'> Shopping Basket <a className='c-checkout-cart__amount'>({lineItemsCount})</a></h1>
            <input id='minibag' type='checkbox' className='c-minibag__dropdown-checkbox' checked={this.props.miniBagDisplayed} readOnly />
            <label htmlFor='minibag' className='c-minibag__dropdown-cross' onClick={this.props.toggleMiniBag} />
          </section>
          <div className='c-minibag__line-items-section'>
            { this.renderLineItems(lineItems) }
          </div>
          <div className='c-minibag__dropdown-review'>
            <span className='c-minibag__dropdown-review-total'>
              <h4>Total:</h4>
              <h4>&pound;{ decimalPrice(miniBagTotal) }</h4>
            </span>
            <div className='c-minibag__dropdown-buttons'>
              <this.Link href='/cart' className='o-button o-button--sml o-button--primary c-minibag__dropdown-buttons--link'>
                view shopping basket
              </this.Link>
              <this.Button label='continue shopping' className='o-button--sml c-minibag__dropdown-buttons--link' status='primary' onClick={this.props.toggleMiniBag} />
            </div>
          </div>
        </div>
      </div>
    </>
  }

  render () {
    const { cart } = this.props
    const lineItemsCount = cart.line_items_count || 0
    const lineItems = cart.line_items
    const miniBagDisplayed = cart.miniBagDisplayed || this.props.miniBagDisplayed

    return <>
        { (miniBagDisplayed && lineItemsCount > 0) && this.renderMiniBagDropdown(lineItemsCount, lineItems, cart.total, cart.shipping_total) }
    </>
  }
}

export default Minibag
