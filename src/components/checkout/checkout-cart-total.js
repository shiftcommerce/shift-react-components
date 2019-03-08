// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import Sticky from 'react-stickyfill'

// Lib
import { decimalPrice } from '../../lib/decimal-price'
import componentMapping from '../../lib/component-mapping'

function CheckoutCartTotal ({ continueButtonProps, discountSummaries, paymentError, shippingDiscount, shippingDiscountName, shippingTotal, subTotal, total }) {
  const Button = componentMapping('Button')
  const Link = componentMapping('Link')

  const renderButtons = (continueButtonProps) => (
    <div className='c-cart-summary-buttons'>
      { renderContinueShoppingButton() }
      { renderContinueButton() }
    </div>
  )

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

  const renderPromotions = () => discountSummaries.map(discountSummary => (
    <dl className='c-cart-summary__promotion' key={ discountSummary.id }>
      <dt>{ discountSummary.name }:</dt>
      <dd>- &pound;{ decimalPrice(discountSummary.total) }</dd>
    </dl>
  ))

  const renderShippingPromotion = () => (
    <dl className='c-cart-summary__promotion'>
      <dt>{ shippingDiscountName }:</dt>
      <dd>- &pound;{ decimalPrice(shippingDiscount * -1) }</dd>
    </dl>
  )

  const shippingText = shippingTotal ? `£${decimalPrice(shippingTotal)}` : 'Loading shipping cost...'

  return (
    <Sticky>
      <div>
        <div aria-label='Cart total summary' className='u-sticky c-cart-summary'>
          <dl aria-label='Subtotal'>
            <dt> Total Price: </dt>
            <dd> &pound;{ decimalPrice(subTotal) } </dd>
          </dl>
          { renderPromotions() }
          <dl aria-label='Shipping cost'>
            <dt> Shipping costs: </dt>
            <dd> { shippingText } </dd>
          </dl>
          { shippingDiscountName && renderShippingPromotion() }
          <dl aria-label='Total' className='u-bold'>
            <dt> TOTAL: </dt>
            <dd> &pound;{ decimalPrice(total) } </dd>
          </dl>
          <dl>
            <dt className='c-cart-summary__VAT'>* Including VAT</dt>
          </dl>
          { paymentError && <div className='c-checkout-cart-total__payment-error'>{ paymentError }</div> }
        </div>
        { renderButtons() }
      </div>
    </Sticky>
  )
}

CheckoutCartTotal.propTypes = {
  continueButtonProps: PropTypes.object.isRequired,
  discountSummaries: PropTypes.arrayOf(PropTypes.object).isRequired,
  paymentError: PropTypes.string,
  shippingDiscount: PropTypes.number,
  shippingDiscountName: PropTypes.string,
  shippingTotal: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default CheckoutCartTotal
