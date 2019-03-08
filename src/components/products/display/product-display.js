// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../../lib/component-mapping'

class ProductDisplay extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.ProductCarousel = componentMapping('ProductCarousel')
    this.ProductEwisForm = componentMapping('ProductEwisForm')
    this.ProductPrice = componentMapping('ProductPrice')
    this.Rating = componentMapping('Rating')
    this.VariantSelector = componentMapping('VariantSelector')
  }

  renderCarousel (product) {
    return (
      <div className='c-product-display__carousel'>
        <this.ProductCarousel assetFiles={product.asset_files} />
      </div>
    )
  }

  renderEwisForm () {
    return (
      <div className='c-product-display__buttons'>
        <this.ProductEwisForm />
      </div>
    )
  }

  renderAddToBasket (addToBag, selectedVariant) {
    const buttonStatus = selectedVariant && selectedVariant.stock_available_level > 0 ? 'positive' : 'disabled'
    const onClick = selectedVariant && selectedVariant.stock_available_level > 0 ? addToBag : null

    return (
      <div className='c-product-display__buttons'>
        <this.Button className='c-product-display__buttons-basket o-button--sml' label='add to basket' status={buttonStatus} aria-label='Add to Basket' onClick={onClick} />
      </div>
    )
  }

  renderButtons () {
    const { addToBag, selectedVariant } = this.props

    if (selectedVariant && selectedVariant.ewis_eligible && selectedVariant.stock_available_level <= 0) {
      return this.renderEwisForm()
    } else {
      return this.renderAddToBasket(addToBag, selectedVariant)
    }
  }

  renderDescription (product, selectedVariant) {
    const description = selectedVariant ? selectedVariant.description : product.description

    if (description) {
      return (
        <div className='c-product-display__description'>
          <h1 className='c-product-display__description-title'>Product Details</h1>
          <label htmlFor='description' className='c-product-dispay__label' />
          <input type='checkbox' id='description' />
          <span className='c-product-display__arrow' />
          <div className='c-product-display__description-text' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )
    }
  }

  renderColourSelector (meta) {
    if (meta.master_colour) {
      const { product } = this.props
      const productColour = product.meta_attributes.master_colour.value

      return (
        <div className='c-product-display__info-colour'>
          <h1 className='c-product-display__info-colour-title'>Colour</h1>
          <input type='radio' id='colour' style={{ backgroundColor: productColour }} />
          <label htmlFor='colour'>{ productColour }</label>
        </div>
      )
    }
  }

  renderTitle (product, selectedVariant) {
    let title = product.title

    if (selectedVariant) {
      title = `${product.title} - ${selectedVariant.title}`
    }

    return (
      <div className='c-product-display__info-title'>
        { title }
      </div>
    )
  }

  renderSku (selectedVariant) {
    if (selectedVariant) {
      return (
        <div className='c-product-display__info-sku'>
          { selectedVariant.sku }
        </div>
      )
    }
  }

  renderPrice (product, selectedVariant) {
    let minPrice = product.min_current_price
    let maxPrice = product.max_current_price

    if (selectedVariant) {
      minPrice = selectedVariant.price
      maxPrice = selectedVariant.price
    }

    return (
      <div className='c-product-display__info-price'>
        <this.ProductPrice minPrice={minPrice} maxPrice={maxPrice} />
      </div>
    )
  }

  renderInfo (product, selectedVariant) {
    const { changeVariant, sku, product: { meta_attributes } } = this.props

    return (
      <div className='c-product-display__info'>
        { this.renderTitle(product, selectedVariant) }
        { this.renderSku(selectedVariant) }
        { this.renderPrice(product, selectedVariant) }
        <div className='c-product-display__info-rating'>
          <this.Rating
            rating={product.rating}
            className='o-rating__star--has-spacing o-rating__star--fs-small'
          />
          <p className='c-product-display__info-reviews'>Read Reviews</p>
        </div>
        { this.renderColourSelector(meta_attributes) }
        <div className='c-product-display__info-variant'>
          <this.VariantSelector
            onClick={changeVariant}
            value={sku}
            name='line_item[item_id]'
            prompt='Select a Product'
            variants={product.variants}
            aria-label='Variant Selector' />
        </div>
      </div>
    )
  }

  render () {
    const { product, selectedVariant } = this.props

    return (
      <div className='c-product-display'>
        <div className='c-product-display__body'>
          <div className='c-product-display__content-image'>
            { this.renderCarousel(product) }
          </div>
          <div className='c-product-display__content-details'>
            { this.renderInfo(product, selectedVariant) }
            { this.renderButtons() }
            <div className='c-product-display__body-dropdowns'>
              { this.renderDescription(product, selectedVariant) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDisplay
