// Libraries
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

function CheckoutSteps ({ currentStep, stepActions }) {
  const Link = componentMapping('Link')

  const renderCheckoutSteps = () => {
    const checkoutSteps = [
      { position: 1, title: 'Shipping Address', href: '/checkout/shipping-address' },
      { position: 2, title: 'Shipping Method', href: '/checkout/shipping-method' },
      { position: 3, title: 'Payment', href: '/checkout/payment', as: '/checkout/payment', shallow: true },
      { position: 4, title: 'Review & Submit' }
    ]

    const checkoutData = checkoutSteps.map((step, index) =>
      <div className='o-header__step' key={index}>
        { renderCheckoutStep(step) }
      </div>
    )

    return (
      <div className='c-step-indicators__steps'>
        { checkoutData }
      </div>
    )
  }

  const renderCheckoutStep = (step) => {
    const stepCompleted = step.position < currentStep
    const content = stepCompleted ? '✔' : step.position
    const active = step.position === currentStep

    if (stepCompleted) {
      return (
        <Link href={step.href} as={step.as} onClick={stepActions[step.position]} shallow={step.shallow}>
          { renderStepIndicator(stepCompleted, active, content, step.title) }
        </Link>
      )
    } else {
      return renderStepIndicator(stepCompleted, active, content, step.title)
    }
  }

  const renderStepIndicator = (stepCompleted, active, content, title) => {
    return (
      <div className={classNames('c-step-indicator', { 'c-step-indicator--active': active, 'c-step-indicator--completed': stepCompleted })}>
        <div className={classNames('c-step-indicator__position', { 'c-step-indicator__position--active': active, 'c-step-indicator__position--completed': stepCompleted })}>
          { content }
        </div>
        <div className={classNames('c-step-indicator__line', { 'c-step-indicator__line--active': active, 'c-step-indicator__line--completed': stepCompleted })} />
        <div className={classNames('c-step-indicator__subtitle', { 'c-step-indicator__subtitle--active': active, 'c-step-indicator__subtitle--completed': stepCompleted })}>
          { title }
        </div>
      </div>
    )
  }

  return (
    <div className='o-header--checkout'>
      <div className='c-checkout__steps'>
        <div className='c-step-indicators'>
          { renderCheckoutSteps() }
        </div>
      </div>
    </div>
  )
}

CheckoutSteps.propTypes = {
  currentStep: PropTypes.oneOf([1, 2, 3, 4]),
  stepActions: PropTypes.objectOf(PropTypes.func)
}

CheckoutSteps.defaultProps = {
  stepActions: {}
}

export default CheckoutSteps
