// Libraries
import React from 'react'

// Components
import PaymentSummary from '../../../src/components/checkout/payment-summary'

test("doesn't add errors class when there are no errors", () => {
  const wrapper = shallow(<PaymentSummary />)

  expect(wrapper.find('div')).not.toMatchSelector('.o-form__error')
})

test('add errors class when errors are present', () => {
  const wrapper = shallow(<PaymentSummary withErrors={true} />)

  expect(wrapper.find('div')).toMatchSelector('.o-form__error')
})
