// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentMethods extends Component {
  constructor (props) {
    super(props)

    this.PaymentMethodHeader = componentMapping('PaymentMethodHeader')
  }

  render () {
    const {
      cart,
      className,
      nextSection
    } = this.props
    return (
      <div aria-label='Payment method' className={classNames(className, 'o-form c-payment-method')}>
        <this.PaymentMethodHeader title={ 'Payment Method' } />
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
