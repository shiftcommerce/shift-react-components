// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentMethods extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
  }

  render () {
    const {
      cart,
      className,
      nextSection
    } = this.props
    return (
      <div aria-label='Payment method' className={classNames(className, 'o-form c-payment-methods c-payment-methods__header')}>
        <this.PaymentMethodHeader title={ 'Payment Method' } />

        <div className='c-payment-methods-buttons'>
          <this.Button
            className='c-payment-methods-buttons__cta c-payment-methods-buttons__cta--continue o-button--lrg'
            type='button'
            label={ 'Pay By Credit/Debit Card' }
            onClick={nextSection}
          />
        </div>
      </div>
    )
  }
}

PaymentMethods.propTypes = {
  cart: PropTypes.object,
  className: PropTypes.string,
  nextSection: PropTypes.func
}

export default PaymentMethods
