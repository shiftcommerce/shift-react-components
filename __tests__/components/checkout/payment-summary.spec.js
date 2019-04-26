// Libraries
import React from 'react'

// Components
import PaymentSummary from '../../../src/components/checkout/payment-summary'

// Objects
import Flash from '../../../src/objects/flash'

test("doesn't add errors class when there are no errors", () => {
  const wrapper = shallow(<PaymentSummary headerTitle={'Paymment'} billingAddress={{}} />)

  expect(wrapper.find('div')).not.toMatchSelector('.o-form__error')
})

test('add errors class when errors are present', () => {
  const wrapper = shallow(<PaymentSummary headerTitle={'Paymment'} billingAddress={{}} withErrors={true} />)

  expect(wrapper.find('div')).toMatchSelector('.o-form__error')
})

test('renders error messages', () => {
  // Arrange
  const errorMessage = 'Something went wrong'
  const headerTitle = 'Payment Details'

  // Act
  const wrapper = shallow(
    <PaymentSummary
      headerTitle={headerTitle}
      billingAddress={{}}
      errorMessage={errorMessage}
    />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find(Flash).length).toEqual(1)
})
