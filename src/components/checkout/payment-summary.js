// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.PaymentHeader = componentMapping('PaymentHeader')
  }

  renderBillingAddress() {
    const { billingAddress } = this.props

    return(
      <>
        <span className='u-bold'>{ billingAddress.first_name } { billingAddress.last_name } </span>
        <span>{ billingAddress.address_line_1 }, { billingAddress.city }, { billingAddress.postcode }</span>
      </>
    )
  }

  render () {
    const { onClick, showEditButton, title, withErrors } = this.props
    return (
      <>
        <this.PaymentHeader
          title={title}
          collapsed
          onClick={onClick}
          showEditButton={showEditButton}
        />
        <div className={classNames('c-payment__summary', { 'o-form__error': withErrors })}>
          <p>
            <span className='u-bold'>Billing Address: </span>
            { this.renderBillingAddress() }
          </p>
        </div>
      </>
    )
  }
}

PaymentSummary.propTypes = {
  billingAddress: PropTypes.object,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  withErrors: PropTypes.bool
}

export default PaymentSummary
