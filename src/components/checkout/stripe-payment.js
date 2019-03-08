// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class StripePayment extends Component {
  constructor (props) {
    super(props)

    this.AddressBook = componentMapping('AddressBook')
    this.AddressForm = componentMapping('AddressForm')
    this.Button = componentMapping('Button')
    this.Checkbox = componentMapping('Checkbox')
    this.StripeWrapper = componentMapping('StripeWrapper')
  }

  renderFormSubmitButton () {
    return (
      <div className='o-form__input-group'>
        <this.Button
          aria-label='Review Your Order'
          className='c-address-form__button o-button--sml'
          label='Review Your Order'
          status={(this.props.nextStepAvailable() ? 'positive' : 'disabled')}
          type='primary'
          disabled={!this.props.nextStepAvailable()}
          onClick={() => this.props.nextSection('complete')}
        />
      </div>
    )
  }

  render () {
    const {
      addressBook,
      autoFillAddress,
      billingAddress,
      billingAsShipping,
      cardTokenRequested,
      changeBillingAsShipping,
      checkout,
      countries,
      currentAddress,
      loggedIn,
      onAddressDeleted,
      onBlur,
      onChange,
      onShowField,
      onCardTokenReceived,
      setCardErrors,
      shippingAddress
    } = this.props

    return (
      <>
        <div className='o-form__background'>
          <div className='o-form__wrapper'>
            <this.StripeWrapper
              billingAddress={checkout.billingAddress}
              cardTokenRequested={cardTokenRequested}
              onCardTokenReceived={onCardTokenReceived}
              setCardErrors={setCardErrors}
            />

            <div className='o-form__input-group'>
              <label>Billing address *</label>
            </div>

            <this.Checkbox
              type='checkbox'
              label='Same as shipping address'
              name='shippingAddressAsBillingAddress'
              checked={billingAsShipping}
              onChange={changeBillingAsShipping}
            />

            { billingAsShipping &&
              <div aria-label='Shipping address to be used for billing' className='o-payment-method__address-summary  c-payment-method__address-summary'>
                <p className='u-bold'>{ `${shippingAddress.first_name} ${shippingAddress.last_name}` }</p>
                <p>{ shippingAddress.address_line_1 }</p>
                <p>{ shippingAddress.address_line_2 }</p>
                <p>{ shippingAddress.city }</p>
                <p>{ shippingAddress.postcode }</p>
              </div>
            }
          </div>
        </div>

        { !billingAsShipping &&
          <>
            { addressBook.length && <this.AddressBook
              addressBook={addressBook}
              formName='shippingAddress'
              currentAddressId={billingAddress.id}
              onAddressDeleted={onAddressDeleted}
              onNewAddress={this.props.onNewAddress}
              onBookAddressSelected={this.props.onBookAddressSelected}
              addressFormDisplayed={this.props.addressFormDisplayed()}
            /> }
            { this.props.addressFormDisplayed() && <this.AddressForm
              aria-label='Billing address form'
              autoFillAddress={autoFillAddress}
              checkout={checkout}
              countries={countries}
              currentAddress={currentAddress}
              title='Billing Address'
              formName='billingAddress'
              onChange={onChange}
              onBlur={onBlur}
              className='o-form__billing'
              onShowField={onShowField}
              loggedIn={loggedIn}
            /> }
          </>
        }
        { this.renderFormSubmitButton() }
      </>
    )
  }
}

StripePayment.propTypes = {
  addressBook: PropTypes.arrayOf(PropTypes.object),
  addressFormDisplayed: PropTypes.func,
  autoFillAddress: PropTypes.func,
  billingAddress: PropTypes.object,
  billingAsShipping: PropTypes.bool,
  cardTokenRequested: PropTypes.bool,
  changeBillingAsShipping: PropTypes.func,
  checkout: PropTypes.object,
  countries: PropTypes.arrayOf(PropTypes.object),
  currentAddress: PropTypes.object,
  loggedIn: PropTypes.bool,
  nextSection: PropTypes.func,
  nextStepAvailable: PropTypes.func,
  onAddressDeleted: PropTypes.func,
  onBookAddressSelected: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onNewAddress: PropTypes.func,
  onShowField: PropTypes.func,
  onCardTokenReceived: PropTypes.func,
  setCardErrors: PropTypes.func,
  shippingAddress: PropTypes.object
}

export default StripePayment
