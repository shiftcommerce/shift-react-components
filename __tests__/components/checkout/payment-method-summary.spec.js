// Libraries
import React from 'react'

// Components
import PaymentMethodSummary from '../../../src/components/checkout/payment-method-summary'

test("doesn't add errors class when there are no errors", () => {
  const wrapper = shallow(<PaymentMethodSummary />)

  expect(wrapper.find('div')).not.toMatchSelector('.o-form__error')
})

test('add errors class when errors are present', () => {
  const wrapper = shallow(<PaymentMethodSummary withErrors={true} />)

  expect(wrapper.find('div')).toMatchSelector('.o-form__error')
})
