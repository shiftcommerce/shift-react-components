import React, { Component } from 'react'

export function withValidationMessage (WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)

      this.renderValidationMessage = this.renderValidationMessage.bind(this)
    }

    renderValidationMessage () {
      let validationMessage = this.props.validationMessage

      return (
        validationMessage && <div className='o-form__input-field__error'>{ validationMessage }</div>
      )
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          renderValidationMessage={this.renderValidationMessage}
        />
      )
    }
  }
}
