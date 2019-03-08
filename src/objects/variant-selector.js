// Libraries
import React, { Component } from 'react'
import { decimalPrice } from '../lib/decimal-price'

// Objects
import Button from './button'

class VariantSelector extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggleSelected: ''
    }

    this.renderOptionButtons = this.renderOptionButtons.bind(this)
    this.selectVariant = this.selectVariant.bind(this)
  }

  renderOptionButtons (variants) {
    const { toggleSelected } = this.state

    return (
      variants && variants.map((variant, idx) => {
        const selected = toggleSelected === variant.id ? 'selected' : ''

        return <Button
          className={`c-product-display__option-button ${selected}`}
          onClick={this.selectVariant}
          type='button'
          key={variant.id}
          value={variant.sku}
          aria-setsize={variants.length}
          aria-posinset={idx + 1}
          data-stock-available-level={variant.stock_available_level}
          data-price={variant.price} data-variant-id={variant.id}
          label={variant.title + ' - £' + decimalPrice(variant.price) + this.stockMessage(variant)} />
      })
    )
  }

  selectVariant (e) {
    this.setState({
      toggleSelected: e.target.attributes['data-variant-id'].value
    })
  }

  stockMessage (variant) {
    if (variant.stock_available_level <= 0 && variant.ewis_eligible) {
      return '- Email When in Stock'
    } else if (variant.stock_available_level <= 0) {
      return '- Out of Stock'
    } else {
      return ''
    }
  }

  render () {
    const {
      name,
      prompt,
      variants,
      ...otherProps
    } = this.props

    return (
      <div className='o-variant-selector' name={name} {...otherProps}>
        { this.renderOptionButtons(variants) }
      </div>
    )
  }
}

export default VariantSelector
