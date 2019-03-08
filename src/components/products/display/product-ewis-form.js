// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../../lib/component-mapping'

class ProductEwisForm extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.Input = componentMapping('Input')
    this.state = {
      ewisSubmitted: false
    }
  }

  submitFields () {
    this.setState({ ewisSubmitted: true })
  }

  render () {
    let ewisMessage

    if (this.state.ewisSubmitted) {
      ewisMessage = (
        <div className='c-ewis-form__submit-message'>
          <div>Thank you for your interest.</div>
          <div>We will email you when this item is back in stock.</div>
        </div>
      )
    }

    return (
      <>
        <this.Input
          placeholder='Email'
          className='c-ewis-form__input-field'
        />
        <this.Button className='c-product-display__buttons-basket o-button--sml' label='Email When in Stock' status='positive' aria-label='Add to Basket' onClick={this.submitFields.bind(this)} />
        {ewisMessage}
      </>
    )
  }
}

export default ProductEwisForm
