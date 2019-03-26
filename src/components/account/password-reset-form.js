// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// lib
import componentMapping from '../../lib/component-mapping'

class PasswordResetForm extends Component {
  constructor(props) {
    super(props)

    this.Button = componentMapping('Button')
    this.AccountFormErrors = componentMapping('FormErrors')
  }

  renderSubmitButton(props) {
    return (
      <this.Button
        className='c-password__button o-button-sml'
        aria-label='Submit'
        label='submit'
        status='primary'
        type='submit'
        disabled={!props.isValid}
        status={(props.isValid ? 'positive' : 'disabled')}
      />
    )
  }

  renderForm(handleSubmit, account) {
    const initialValues = {
      password: '',
      confirmPassword: ''
    }

    const passwordSchema = Yup.object().shape({
      password: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .max(30, 'Password must be shorter than 30 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Must match')
    })

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={passwordSchema}
        onSubmit={handleSubmit}
        render={(props) => (
          <Form>
            <this.AccountFormErrors errors={account.errors} />
            <Field type='password' name='password' placeholder='New Password' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='password' />
            </div>
            <Field type='password' name='confirmPassword' placeholder='Confirm Password' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='confirmPassword' />
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
      account
    } = this.props

    return (
      <div className={classNames('o-form', className)}>
        <div className='c-password'>
          <h1 className='c-password__title'>Password Reset</h1>
          <p className='c-password__caption'>Please enter your new password</p>
          { this.renderForm(handleSubmit, account) }
        </div>
      </div>
    )
  }
}

export default PasswordResetForm
