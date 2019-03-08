// Libraries
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class CouponForm extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
  }

  /**
   * Renders a vailation message if no coupon code is entered
   * @param  {Object} values
   * @return {string} - HTML markup for the component
   */
  validate (values) {
    let errors = {}
    if (!values.couponCode) errors.couponCode = 'Please enter a coupon code'
    return errors
  }

  /**
   * Renders the form
   * @param  {function} validate
   * @param  {function} handleSubmit
   * @return {string} - HTML markup for the component
   */
  renderForm () {
    return (
      <Formik
        initialValues={{ couponCode: '' }}
        validate={this.validate}
        onSubmit={this.props.handleSubmit}
      >
        { () => (
          <Form>
            <div className='c-coupon-form__field'>
              <Field type='text' name='couponCode' className='c-coupon-form__input' placeholder='Enter Promotion Code' />
              <div className="c-coupon-form__button-container">
                <this.Button
                  aria-label='Apply Gift Code'
                  className='c-coupon-form__button o-button--sml'
                  label='Apply'
                  status='primary' />
              </div>
            </div>
            <ErrorMessage name='couponCode' component='div' className='c-coupon-form__error' />
          </Form>
        ) }
      </Formik>
    )
  }

  render () {
    return (
      <div className='c-coupon-form'>
        <div aria-label='Use gift card or rewards code' className='c-gift__wrapper'>
          <p className='c-coupon-form__title'>Promotion Code</p>
          { this.renderForm() }
        </div>
      </div>
    )
  }
}

CouponForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default CouponForm
