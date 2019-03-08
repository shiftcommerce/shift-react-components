// Libraries
import React from 'react'

// Components
import CouponForm from '../../../src/components/cart/coupon-form'

test('displays an input and a submit button', () => {
  const wrapper = mount(
    <CouponForm />
  )

  expect(wrapper).toContainMatchingElement('.c-coupon-form__input')
  expect(wrapper).toContainMatchingElement('.c-coupon-form__button')
  expect(wrapper).toMatchSnapshot()
})

describe('#validate', () => {
  test('adds an error message when the coupon code field is empty', () => {
    const wrapper = mount(
      <CouponForm />
    )

    const errors = wrapper.instance().validate({})
    expect(errors.couponCode).toBeTruthy()
  })

  test("doesn't add errors when a coupon code is provided", () => {
    const wrapper = mount(
      <CouponForm />
    )

    const errors = wrapper.instance().validate({ couponCode: 'COUPON_CODE' })
    expect(errors.couponCode).toBeUndefined()
  })
})
