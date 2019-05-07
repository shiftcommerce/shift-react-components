// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class Payment extends PureComponent {
  constructor (props) {
    super(props)

    this.PaymentHeader = componentMapping('PaymentHeader')
    this.StripePayment = componentMapping('StripePayment')
  }

  render () {
    const {
      addingNewAddress,
      addressBook,
      addressFormDisplayed,
      autoFillAddress,
      billingAsShipping,
      changeBillingAsShipping,
      cart,
      className,
      checkout,
      countries,
      currentAddress,
      headerTitle,
      loggedIn,
      nextStepAvailable,
      nextSection,
      onAddressDeleted,
      onBookAddressSelected,
      onBlur,
      onChange,
      onNewAddress,
      onShowField,
      onCardTokenReceived,
      setCardErrors,
      order
    } = this.props
    return (
      <div aria-label='Payment method' className={classNames(className, 'o-form c-payment')}>
        <this.PaymentHeader title={headerTitle}/>
        <div className='c-payment__section' style={{ display: 'block' }}>
          <this.StripePayment
            addingNewAddress={addingNewAddress}
            addressBook={addressBook}
            addressFormDisplayed={addressFormDisplayed}
            autoFillAddress={autoFillAddress}
            billingAddress={cart.billing_address}
            billingAsShipping={billingAsShipping}
            cardTokenRequested={order.cardTokenRequested}
            changeBillingAsShipping={changeBillingAsShipping}
            checkout={checkout}
            currentAddress={currentAddress}
            countries={countries}
            loggedIn={loggedIn}
            nextStepAvailable={nextStepAvailable}
            nextSection={nextSection}
            onAddressDeleted={onAddressDeleted}
            onBookAddressSelected={onBookAddressSelected}
            onBlur={onBlur}
            onChange={onChange}
            onNewAddress={onNewAddress}
            onShowField={onShowField}
            onCardTokenReceived={onCardTokenReceived}
            setCardErrors={setCardErrors}
            shippingAddress={cart.shipping_address}
          />
        </div>
      </div>
    )
  }
}

Payment.propTypes = {
  addingNewAddress: PropTypes.bool,
  addressBook: PropTypes.object,
  addressFormDisplayed: PropTypes.func,
  autoFillAddress: PropTypes.func,
  billingAsShipping: PropTypes.bool,
  changeBillingAsShipping: PropTypes.func,
  cart: PropTypes.object,
  className: PropTypes.string,
  checkout: PropTypes.object,
  countries: PropTypes.array,
  currentAddress: PropTypes.object,
  headerTitle: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool,
  nextStepAvailable: PropTypes.func,
  nextSection: PropTypes.func,
  onAddressDeleted: PropTypes.func,
  onBookAddressSelected: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onNewAddress: PropTypes.func,
  onShowField: PropTypes.func,
  onCardTokenReceived: PropTypes.func,
  order: PropTypes.object,
  setCardErrors: PropTypes.func
}

export default Payment
