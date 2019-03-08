// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// HOC
import { withValidationMessage } from './with-validation-message'

class DropdownSelect extends Component {
  constructor (props) {
    super(props)

    this.triggerBlur = this.triggerBlur.bind(this)
    this.triggerChange = this.triggerChange.bind(this)
  }

  renderOptions (options) {
    return (
      options && options.map((option, idx) =>
        <option role='option' key={idx} value={option.value || option} aria-setsize={options.length} aria-posinset={idx + 1} >{ option.title || option }</option>
      )
    )
  }

  triggerChange (event) {
    const { formName, name, onChange } = this.props
    if (onChange) {
      onChange(event, formName, name, event.target.value)
    }
  }

  triggerBlur (event) {
    const { formName, name, rules, onBlur } = this.props
    if (onBlur) {
      onBlur(event, formName, name, event.target.value, rules)
    }
  }

  renderDropdown () {
    const { name, value, prompt, options, required, className, validationMessage, disabled } = this.props

    return (
      <select
        className={classNames('o-form__input-block o-form__input-field', className, { 'o-form__input-field__error': validationMessage })}
        id={name}
        required={required}
        value={value}
        name={name}
        role='listbox'
        onChange={this.triggerChange}
        onBlur={this.triggerBlur}
        disabled={disabled}
      >
        <option role='option' value='' aria-setsize={options.length} aria-posinset='0'>{ prompt }</option>
        { this.renderOptions(options) }
      </select>
    )
  }

  renderLabel () {
    const { label, name, required } = this.props

    if (label) {
      return (
        <label htmlFor={name} className='o-form__label'><b>{ label }{ required && ' *' }</b></label>
      )
    }
  }

  render () {
    return (
      <div className={classNames('o-form__input-group')}>
        { this.renderLabel() }
        { this.renderDropdown() }
        { this.props.renderValidationMessage() }
      </div>
    )
  }
}

export default withValidationMessage(DropdownSelect)
