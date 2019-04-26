// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class PaymentHeader extends PureComponent {
  constructor (props) {
    super(props)
    this.Button = componentMapping('Button')
  }

  render () {
    const {
      collapsed,
      onClick,
      showEditButton,
      title
    } = this.props

    return (
      <div className='o-form__header  c-payment__header'>
        <h2>{ title }</h2>
        { collapsed && showEditButton && <this.Button
          aria-label='Edit your payment method'
          className='o-button-edit'
          label='Edit'
          status='secondary'
          onClick={onClick}
        /> }
      </div>
    )
  }
}

PaymentHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default PaymentHeader