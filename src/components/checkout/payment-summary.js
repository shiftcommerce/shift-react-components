// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.Flash = componentMapping('Flash')
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
    const { errorMessage, headerTitle, onClick, showEditButton, withErrors } = this.props
    return (
      <>
        <this.PaymentHeader
          title={headerTitle}
          collapsed
          onClick={onClick}
          showEditButton={showEditButton}
        />
        <div className={classNames('c-payment__summary', { 'o-form__error': withErrors })}>
         { errorMessage && <this.Flash text={errorMessage} modifier={'error'}/> }
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
  errorMessage: PropTypes.string,
  headerTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  withErrors: PropTypes.bool
}

export default PaymentSummary
