// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import Sticky from 'react-stickyfill'

// Lib
import componentMapping from '../../lib/component-mapping'

function CheckoutCartButtons ({ continueButtonProps }) {
  const Button = componentMapping('Button')
  const Link = componentMapping('Link')

  const renderContinueButton = () => (
    <Button
      className='c-cart-summary-buttons__cta c-cart-summary-buttons__cta--proceed o-button--sml'
      type='button'
      {...continueButtonProps}
    />
  )

  const renderContinueShoppingButton = () => (
    <Link
      href='/'
      className='c-cart-summary-buttons__cta c-cart-summary-buttons__cta--continue o-button--sml'>
      Continue Shopping
    </Link>
  )

  return (
    <Sticky>
      <div className='c-cart-summary-buttons'>
        { renderContinueShoppingButton() }
        { renderContinueButton() }
      </div>
    </Sticky>
  )
}

CheckoutCartButtons.propTypes = {
  continueButtonProps: PropTypes.object.isRequired
}

export default CheckoutCartButtons
