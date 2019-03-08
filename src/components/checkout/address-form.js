// Libraries
import React, { Component } from 'react'
import t from 'typy'

// Lib
import componentMapping from '../../lib/component-mapping'

export class AddressForm extends Component {
  constructor (props) {
    super(props)

    this.Checkbox = componentMapping('Checkbox')
    this.DropdownSelect = componentMapping('DropdownSelect')
    this.Input = componentMapping('Input')
  }

  componentDidMount () {
    const { currentAddress, autoFillAddress } = this.props
    if (currentAddress && autoFillAddress) autoFillAddress(currentAddress)
  }

  formValid (formInput) {
    const requiredFields = ['line_1', 'zipcode', 'city', 'primary_phone', 'email']
    const requiredFieldsPresent = (requiredFields().every((key) => formInput[key] !== '' && formInput[key] !== null) === true)
    const noFormErrorsPresent = (Object.values(formInput.errors).filter(String).length === 0)
    return (requiredFieldsPresent && noFormErrorsPresent)
  }

  render () {
    return (
      <form className='o-form__wrapper o-form__background'>
        { this.renderCountriesDropdown() }
        { this.renderCustomerNameFields() }
        { this.renderCompanyNameOption() }
        { this.renderAddressLine1() }
        { this.renderAddressLine2() }
        { this.renderAddressFields() }
        { this.renderPhone() }
        { this.renderEmail() }
        <p>* Denotes required fields</p>
        { this.renderSaveAddressCheckbox() }
        { this.renderNewsletterCheckbox() }
      </form>
    )
  }

  renderCountriesDropdown () {
    const { checkout, countries, formName, onChange, onBlur } = this.props
    const formInput = checkout[formName]
    const name = 'country_code'
    const rules = { required: true }

    return (
      <>
        <this.DropdownSelect
          options={countries}
          label='Country'
          name={name}
          value={formInput.country_code}
          formName={formName}
          required={rules.required}
          rules={rules}
          validationMessage={formInput.errors[name]}
          onChange={onChange}
          onBlur={onBlur}
          prompt='Select a Country'
        />
      </>
    )
  }

  renderInputField (formInput, fieldOption) {
    return (
      <>
        <this.Input
          label={fieldOption.label}
          className={fieldOption.className}
          placeholder={fieldOption.placeholder}
          name={fieldOption.name}
          type={fieldOption.type}
          value={fieldOption.value}
          required={t(fieldOption, 'rules.required').safeObject}
          validationMessage={formInput.errors[fieldOption.name]}
          rules={fieldOption.rules}
          formName={this.props.formName}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
      </>
    )
  }

  renderCheckbox (formInput, fieldOption) {
    return (
      <>
        <this.Checkbox
          label={fieldOption.label}
          className={fieldOption.className}
          name={fieldOption.name}
          checked={!!fieldOption.value}
          required={t(fieldOption, 'rules.required').safeObject}
          validationMessage={formInput.errors[fieldOption.name]}
          rules={fieldOption.rules}
          formName={this.props.formName}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
      </>
    )
  }

  renderCustomerNameFields () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]

    const fieldOptions = [
      { className: 'o-form__input-block', placeholder: 'Enter First Name', label: 'First Name', name: 'first_name', value: formInput.first_name, rules: { required: true, maxLength: 50 } },
      { className: 'o-form__input-block', placeholder: 'Enter Last Name', label: 'Last Name', name: 'last_name', value: formInput.last_name, rules: { required: true, maxLength: 50 } }
    ]

    return (
      <div className='o-flex o-flex__space-between'>
        { fieldOptions.map((fieldOption, index) => {
          return (
            <div className='o-flex-full-width-s' key={index}>
              { this.renderInputField(formInput, fieldOption) }
            </div>
          )
        }) }
      </div>
    )
  }

  renderCompanyNameOption () {
    const { checkout, formName, onShowField } = this.props
    const formInput = checkout[formName]
    const fieldOption = { className: 'o-form__input-block', label: 'Company Name', name: 'companyName', value: formInput.companyName }

    return (
      <>
        { !(formInput.companyNameShown) &&
          <a href='#' onClick={() => onShowField(formName, 'companyNameShown')}>
            <p>+ Add Company Name (optional)</p>
          </a>
        }
        { formInput.companyNameShown && this.renderInputField(formInput, fieldOption) }
      </>
    )
  }

  renderAddressLine1 () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]
    const fieldOption = { className: 'o-form__input-block', placeholder: 'Enter Address', label: 'Address 1', name: 'line_1', value: formInput.line_1, rules: { required: true } }

    return (
      <>
        { this.renderInputField(formInput, fieldOption) }
      </>
    )
  }

  renderAddressLine2 () {
    const { checkout, formName, onShowField } = this.props
    const formInput = checkout[formName]
    const fieldOption = { className: 'o-form__input-block', label: 'Address 2', name: 'line_2', value: formInput.line_2 }

    return (
      <>
        { !(formInput.address2Shown) &&
          <a href='#' onClick={() => onShowField(formName, 'address2Shown')}>
            <p>+ Add Address 2 (optional)</p>
          </a>
        }
        { formInput.address2Shown && this.renderInputField(formInput, fieldOption) }
      </>
    )
  }

  renderAddressFields () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]
    const fieldOptions = [
      { className: 'o-form__input-block', placeholder: 'Enter Post Code', label: 'Post Code', name: 'zipcode', value: formInput.zipcode, rules: { required: true, postcode: true } },
      { className: 'o-form__input-block', placeholder: 'Enter City', label: 'City', name: 'city', value: formInput.city, rules: { required: true } },
      { className: 'o-form__input-block', placeholder: 'Enter County', label: 'County', name: 'state', value: formInput.state }
    ]

    return (
      <>
        { fieldOptions.map((fieldOption, index) => {
          return (
            <div key={index}>
              { this.renderInputField(formInput, fieldOption) }
            </div>
          )
        }) }
      </>
    )
  }

  renderPhone () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]
    const fieldOption = { className: 'o-form__input-block', placeholder: 'Enter Phone', label: 'Phone', name: 'primary_phone', value: formInput.primary_phone, rules: { required: true, phone: true } }

    return (
      <>
        <p className='o-form__additional-label'>Required for any delivery related questions</p>
        { this.renderInputField(formInput, fieldOption) }
      </>
    )
  }

  renderEmail () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]
    const fieldOption = { className: 'o-form__input-block', placeholder: 'Enter Email', label: 'Email', name: 'email', type: 'email', value: formInput.email, rules: { required: true, email: true } }

    return (
      <>
        <p className='o-form__additional-label'>Required for Order Confirmation Email</p>
        { this.renderInputField(formInput, fieldOption) }
      </>
    )
  }

  renderSaveAddressCheckbox () {
    const { loggedIn, checkout, formName } = this.props
    const formInput = checkout[formName]
    const checkboxOptions = { label: 'Save address for later', name: 'saveToAddressBook', value: formInput.saveToAddressBook, className: 'o-form__checkbox-label' }
    const inputOptions = { className: 'o-form__input-block', placeholder: 'A recognisable name, only for your own use, e.g. "Home"', label: 'Address name', name: 'label', type: 'text', value: formInput.label }
    const preferredShippingCheckboxOptions = { className: 'o-form__checkbox-label', label: 'Set as preferred shipping address', name: 'preferred_shipping', value: formInput.setAsPreferredShipping }
    const preferredBillingCheckboxOptions = { className: 'o-form__checkbox-label', label: 'Set as preferred billing address', name: 'preferred_billing', value: formInput.setAsPreferredBilling }
    return (
      <>
        { loggedIn && !formInput.formPreFilled && this.renderCheckbox(formInput, checkboxOptions) }
        { formInput.saveToAddressBook && this.renderCheckbox(formInput, preferredShippingCheckboxOptions) }
        { formInput.saveToAddressBook && this.renderCheckbox(formInput, preferredBillingCheckboxOptions) }
        { formInput.saveToAddressBook && this.renderInputField(formInput, inputOptions) }
      </>
    )
  }

  renderNewsletterCheckbox () {
    const { checkout, formName } = this.props
    const formInput = checkout[formName]
    const fieldOption = {
      label: 'Sign up for Weekly Newsletters (Optional)',
      name: 'newsletterOptIn',
      value: formInput.newsletterOptIn,
      className: 'o-form__checkbox-label'
    }
    return (
      <>
        { formName === 'shippingAddress' && this.renderCheckbox(formInput, fieldOption) }
      </>
    )
  }
}

export default AddressForm
