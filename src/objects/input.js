// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// HOC
import { withValidationMessage } from './with-validation-message'

class Input extends Component {
  constructor (props) {
    super(props)

    this.triggerChange = this.triggerChange.bind(this)
    this.triggerBlur = this.triggerBlur.bind(this)
    this.state = {
      type: props.type,
      score: null
    }

    // Set callback ref to allow us to refer to this input later
    // This ref is assigned when rendering the <input> tag below
    this.passwordInput = null
    this.setPasswordInputRef = (element) => {
      this.passwordInput = element
    }
  }

  triggerChange (event) {
    const { formName, name, onChange } = this.props
    const value = event.target.value

    if (onChange) {
      onChange(event, formName, name, value)
    }
  }

  triggerBlur (event) {
    const { formName, name, rules, onBlur } = this.props
    const value = event.target.value

    if (onBlur) {
      onBlur(event, formName, name, value, rules)
    }
  }

  validateForm () {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.firstNameValid && this.state.lastNameValid && this.state.confirmEmailValid && this.state.confirmPasswordValid })
  }

  errorClass (error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  renderLabel () {
    const { name, label, required } = this.props
    return (
      <label htmlFor={name} className='o-form__label'>
        <b>{ label } { required && ' *' }</b>
        { this.renderInputField() }
      </label>
    )
  }

  renderInputField () {
    const { inputId, value, name, required, placeholder, className, validationMessage, readOnly } = this.props
    const id = inputId || name
    let fieldValue = value || null
    let validationErrorPresent = (validationMessage !== undefined) && (validationMessage !== '')

    return (
      <input
        checked={fieldValue === true}
        className={classNames('o-form__input-field', className, { 'o-form__input-field__error': validationErrorPresent })}
        type={this.state.type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={this.triggerChange}
        onBlur={this.triggerBlur}
        value={value}
        ref={this.setPasswordInputRef}
        readOnly={readOnly}
      />
    )
  }

  render () {
    const { hidden, renderValidationMessage, inputGroupClassName } = this.props
    const type = this.state.type || 'text'

    let inputFields = ''

    if (type === 'checkbox') {
      inputFields = <>
        { this.renderInputField() }
        { this.renderLabel() }
      </>
    } else {
      inputFields = <>
        { this.renderLabel() }
      </>
    }

    return (
      <div className={classNames('o-form__input-group', inputGroupClassName, { 'u-hidden': hidden })}>
        { inputFields }
        { renderValidationMessage() }
      </div>
    )
  }
}

export default withValidationMessage(Input)
