// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// HOC
import { withValidationMessage } from './with-validation-message'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: (props.checked || false)
    }

    this.triggerBlur = this.triggerBlur.bind(this)
    this.triggerChange = this.triggerChange.bind(this)
  }

  triggerChange (event) {
    const {
      formName,
      name,
      onChange
    } = this.props
    const checked = event.target.checked

    this.setState({ checked: checked })

    if (onChange) {
      onChange(event, formName, name, checked)
    }
  }

  triggerBlur (event) {
    const {
      formName,
      name,
      rules,
      onBlur
    } = this.props
    const checked = event.target.checked

    this.setState({ checked: checked })

    if (onBlur) {
      onBlur(event, formName, name, checked, rules)
    }
  }

  renderInputField () {
    const {
      required,
      inputId,
      name
    } = this.props
    const id = (inputId || name)

    return (
      <input
        id={id}
        name={name}
        type='checkbox'
        className='o-form__checkbox'
        checked={this.state.checked}
        required={required}
        onChange={this.triggerChange}
        onBlur={this.triggerBlur}
      />
    )
  }

  renderCheckbox () {
    const {
      name,
      label,
      className,
      required,
      validationMessage
    } = this.props

    const validationErrorPresent = (validationMessage !== undefined) && (validationMessage !== '')

    return (
      <label htmlFor={name} className={classNames('o-form__label', className, { 'o-form__input-field__error': validationErrorPresent })}>
        { this.renderInputField() }
        <span className='o-form__checkbox-caption'>
          { label } { required && ' *' }
        </span>
      </label>
    )
  }

  render () {
    return (
      <div className={classNames('o-form__input-group', { 'u-hidden': this.props.hidden })}>
        { this.renderCheckbox() }
        { this.props.renderValidationMessage() }
      </div>
    )
  }
}

export default withValidationMessage(Checkbox)
