// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// lib
import componentMapping from '../../lib/component-mapping'

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props)

    this.Button = componentMapping('Button')
  }

  renderSubmitButton(props) {
    return (
      <this.Button
        className='c-password__button o-button-sml'
        aria-label='Submit'
        label='SUBMIT'
        status='primary'
        type='submit'
        disabled={!props.isValid}
        status={(props.isValid ? 'positive' : 'disabled')}
      />
    )
  }

  renderFlashMessage () {
    return (
      <div className='c-password__flash-message'>
        <a>Password reset email sent.</a>
        <a>Please allow up to 30 mins for the email to arrive.</a>
      </div>
    )
  }

  renderForm (handleSubmit) {
    const initialValues = {
      email: ''
    }

    const emailSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required')
    })

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={emailSchema}
        onSubmit={handleSubmit}
        render={(props) => (
          <Form>
            <Field type='email' name='email' placeholder='Email' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='email' />
            </div>
            {this.renderSubmitButton(props)}
          </Form>
        )}
      />
    )
  }

  render() {
    const {
      className,
      handleSubmit,
      flashMessage
    } = this.props

    return (
      <div className={classNames('o-form', className)}>
        {flashMessage && this.renderFlashMessage()}
        <div className='c-password'>
          <h1 className='c-password__title'>Forgot Password</h1>
          <p className='c-password__caption'>Please enter your email address and submit. In doing this an email containing a special link will be mailed to you. Once received, click on this link and you will then have the opportunity to enter a new password.</p>
          { this.renderForm(handleSubmit) }
        </div>
      </div>
    )
  }
}

export default ForgotPasswordForm
