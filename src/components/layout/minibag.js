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
    this.DropdownSelect = componentMapping('DropdownSelect')
  }

  renderLineItems (lineItems) {
    const { onItemQuantityUpdated } = this.props
    return lineItems.sort((item1, item2) => parseInt(item1.id) - parseInt(item2.id)).map((lineItem) => {
      return (
        <div className='c-minibag__line-item' key={lineItem.item.sku}>
          <div className='c-minibag__line-item-information'>
            <div className='c-minibag__line-item-information-title'>
              <p>{`${lineItem.item.product.title} - ${lineItem.item.title}`}</p>
              <a className='c-minibag__line-item-total'>&pound;{decimalPrice(lineItem.total)}</a>
              { lineItem.line_item_discounts.length > 0 && <a className='c-minibag__line-item-subtotal'>&pound;{decimalPrice(lineItem.sub_total)}</a> }
            </div>
            <this.DropdownSelect
              className='c-minibag__quantity'
              data-id={lineItem.id}
              label='Quantity'
              onChange={onItemQuantityUpdated}
              options={this.renderQuantityOptions(lineItem)}
              skipPrompt
              value={lineItem.unit_quantity}
            />
            <a className='c-minibag__line-item--delete' data-id={lineItem.id} onClick={this.props.deleteItem} >
              Remove
            </a>
          </div>
          <div className='c-minibag__line-item-images'>
            <this.Link href={`/slug?slug=${lineItem.item.product.canonical_path}`}>
              <this.Image className='c-minibag__line-item-image' src={lineItem.item.picture_url} alt={lineItem.item.title} key={lineItem.item.product.slug} aria-label={lineItem.item.title} />
            </this.Link>
          </div>
        </div>
      )
    })
  }

  /**
  * Builds options prop for the DropdownSelect component.  
  * @param {Object} lineItem - A line item from cart.
  */
  renderQuantityOptions (lineItem) {
    // Render options from 1 to 10 or maximum available stock, whichever is lower.
    const maxStock = Math.min(10, lineItem.stock_available_level)
    const baseOptions = Array.from({length: maxStock}, (_, i) => ({
      title: i+1,
      value: i+1
    }))

    // Render an additional option with the current quantity if it is higher than the maximum above.
    if (lineItem.unit_quantity > maxStock) {
      baseOptions.push({
        title: lineItem.unit_quantity,
        value: lineItem.unit_quantity
      })
    }

    return baseOptions
  }

  renderMiniBagDropdown(lineItemsCount, lineItems, cart) {
    const miniBagTotal = cart.total - cart.shipping_total
    return <>
      <div className='c-minibag__overlay' onClick={() => this.props.toggleMiniBag(false)} />
      <div className='c-minibag__dropdown'>
        <div className='c-minibag__dropdown-container'>
          <section className='c-minibag__dropdown-header'>
            <h1 className='c-minibag__dropdown-title'> Shopping Basket <a className='c-checkout-cart__amount'>({lineItemsCount})</a></h1>
            <input id='minibag' type='checkbox' className='c-minibag__dropdown-checkbox' checked={this.props.miniBagDisplayed} readOnly />
            <label htmlFor='minibag' className='c-minibag__dropdown-cross' onClick={() => this.props.toggleMiniBag(false)} />
          </section>
          { lineItemsCount > 0 && <>
            <div className='c-minibag__line-items-section'>
              { this.renderLineItems(lineItems) }
            </div>
            <div className='c-minibag__dropdown-review'>
              <div className='c-minibag__dropdown-review-totals'>
                { cart.discount_summaries.length > 0 && <div className='c-minibag__dropdown-review-total-line'>
                  <p>Subtotal:</p>
                  <p>£{ decimalPrice(cart.sub_total) }</p>
                </div> }
                { cart.discount_summaries.map(discount => (
                  <div className='c-minibag__dropdown-review-total-line c-minibag__dropdown-review-total-line--promotion' key={discount.id}>
                    <p>{ discount.name }:</p>
                    <p>- £{ decimalPrice(discount.total) }</p>
                  </div>
                ))}
                <div className='c-minibag__dropdown-review-total-line c-minibag__dropdown-review-total-line--main'>
                  <p>Total:</p>
                  <p>£{ decimalPrice(miniBagTotal) }</p>
                </div>
              </div>
            </div>
          </> }
          { lineItemsCount === 0 && <p>
            Your bag is empty. 
          </p> }
            <div className='c-minibag__dropdown-buttons'>
              <this.Link href='/cart' className='o-button o-button--sml o-button--primary c-minibag__dropdown-buttons--link' onClick={ () => this.props.toggleMiniBag(false) }>
                view shopping basket
              </this.Link>
              <this.Button label='continue shopping' className='o-button--sml c-minibag__dropdown-buttons--link' status='primary' onClick={() => this.props.toggleMiniBag(false)} />
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
        { miniBagDisplayed && this.renderMiniBagDropdown(lineItemsCount, lineItems, cart) }
    </>
  }
}

export default Minibag
