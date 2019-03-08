// Libraries
import React from 'react'

// Components
import CheckoutSteps from '../../../src/components/checkout/checkout-steps'

test('Renders steps correctly', () => {
  // Act
  const wrapper = shallow(<CheckoutSteps currentStep={1} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toIncludeText('Shipping Address')
  expect(wrapper).toIncludeText('Shipping Method')
  expect(wrapper).toIncludeText('Payment')
  expect(wrapper).toIncludeText('Review & Submit')
})

test('Renders current step 1 correctly', () => {
  // Act
  const wrapper = shallow(<CheckoutSteps currentStep={1} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('.c-step-indicator--active')).toIncludeText('Shipping Address')
})

test('Renders current step 2 correctly', () => {
  // Act
  const wrapper = shallow(<CheckoutSteps currentStep={2} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('Link').length).toEqual(1)
  expect(wrapper.find('.c-step-indicator--active')).toIncludeText('Shipping Method')
})

test('Renders current step 3 correctly', () => {
  // Act
  const wrapper = shallow(<CheckoutSteps currentStep={3} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('Link').length).toEqual(2)
  expect(wrapper.find('.c-step-indicator--active')).toIncludeText('Payment')
})

test('Renders current step 4 correctly', () => {
  // Act
  const wrapper = shallow(<CheckoutSteps currentStep={4} />)

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('Link').length).toEqual(3)
  expect(wrapper.find('.c-step-indicator--active')).toIncludeText('Review & Submit')
})

test('Provides onClick handlers to links', () => {
  // Act
  const wrapper = mount(<CheckoutSteps
    currentStep={4}
    stepActions={{
      3: () => 'onClick test'
    }}
  />)

  // Assert
  expect(wrapper.find('a').at(2).props().onClick()).toEqual('onClick test')
})
