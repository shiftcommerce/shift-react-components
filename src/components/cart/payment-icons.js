// Libraries
import React from 'react'
import classNames from 'classnames'

import componentMapping from '../../lib/component-mapping'

/**
 * Renders a help message when there is no data for the cart
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const PaymentIcons = (props) => {
  const Image = componentMapping('Image')

  return (
    <div className={classNames(props.className, 'c-payment-icons')}>
      <p>We Accept</p>
      <div className='c-payment-icons__images'>
        <Image className='c-payment-icons__image' src='/static/payments/visa.svg' aria-label='VISA' />
        <Image className='c-payment-icons__image' src='/static/payments/mastercard.svg' aria-label='Mastercard' />
        <Image className='c-payment-icons__image' src='/static/payments/american-express.svg' aria-label='American Express' />
        <Image className='c-payment-icons__image' src='/static/payments/maestro.svg' aria-label='Maestro' />
        <Image className='c-payment-icons__image' src='/static/payments/pay-pal.svg' aria-label='PayPal' />
        <Image className='c-payment-icons__image' src='/static/payments/apple-pay.svg' aria-label='Apple Pay' />
      </div>
    </div>
  )
}

export default PaymentIcons
