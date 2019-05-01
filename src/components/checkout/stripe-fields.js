// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  injectStripe,
  CardElement
} from 'react-stripe-elements'
import classNames from 'classnames'

class StripeFields extends Component {
  constructor () {
    super()

    this.state = {
      errors: {
        CardElement: ''
      },
      dataAvailable: {
        CardElement: false
      }
    }
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.cardTokenRequested && this.props.cardTokenRequested) {
      const billingAddress = this.props.billingAddress

      this.props.stripe.createToken({
        name: `${billingAddress.first_name} ${billingAddress.last_name}`,
        address_city: billingAddress.city,
        address_country: billingAddress.country_code,
        address_line1: billingAddress.line_1,
        address_line2: billingAddress.line_2,
        address_state: billingAddress.state,
        address_zip: billingAddress.zipcode
      }).then(({ token, error }) => {
        this.props.onCardTokenReceived(error ? { error } : { token })
      })
    }
  }

  handleChange (fieldName, e) {
    let errorMessage = ''
    if (e.error || e.complete === false) {
      errorMessage = e.error ? e.error.message : 'Incomplete card details'
    }
    this.setState({
      errors: Object.assign(this.state.errors, { [fieldName]: errorMessage }),
      dataAvailable: Object.assign(this.state.dataAvailable, { [fieldName]: !e.empty })
    })

    e.complete ? this.props.setStripeFormComplete(true) : this.props.setStripeFormComplete(false)

    this.checkDataValidity()
  }

  checkDataValidity () {
    const errors = this.state.errors
    const dataAvailable = this.state.dataAvailable
    const error = Object.keys(errors).every((key) => errors[key] === '') === true
    const allFields = Object.keys(dataAvailable).every((key) => dataAvailable[key] === true) === true
    this.props.setCardErrors(!(error && allFields))
  }

  renderValidationMessageFor (fieldName) {
    let errorMessage = this.state.errors[fieldName]

    return (
      errorMessage && <div className='o-form__input-field__error'>{ errorMessage }</div>
    )
  }

  render () {
    let { errors } = this.state

    return <>
      <label>
        Please enter your credit card details *
        <CardElement
          className={classNames('o-form__input-field', { 'o-form__input-field__error': (errors.CardElement !== '') })}
          onChange={this.handleChange.bind(this, 'CardElement')}
          hidePostalCode={true}
        />
      </label>

      { this.renderValidationMessageFor('CardElement') }
    </>
  }
}

StripeFields.propTypes = {
  billingAddress: PropTypes.object,
  cardTokenRequested: PropTypes.bool,
  onCardTokenReceived: PropTypes.func,
  setCardErrors: PropTypes.func,
  stripe: PropTypes.object
}

export default injectStripe(StripeFields)
