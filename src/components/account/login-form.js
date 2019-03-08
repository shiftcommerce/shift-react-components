// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// lib
import componentMapping from '../../lib/component-mapping'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.Checkbox = componentMapping('Checkbox')
    this.AccountFormErrors = componentMapping('FormErrors')
  }

  renderEmailInputField () {
    return (
      <div className='o-flex o-flex__space-between'>
        <div className='o-flex-full-width-s'>
          <label className='o-form__label'><b>Email *</b></label>
          <Field type='email' name='email' placeholder='Email' className='o-form__input-field o-form__input-block' />
          <div className='o-form__input-field__error'>
            <ErrorMessage name='email' />
          </div>
        </div>
      </div>
    )
  }

  renderPasswordInputField () {
    return (
      <div className='o-flex o-flex__space-between'>
        <div className='o-flex-full-width-s'>
          <label className='o-form__label'><b>Password *</b></label>
          <Field type='password' name='password' placeholder='Password' className='o-form__input-field o-form__input-block' />
          <div className='o-form__input-field__error'>
            <ErrorMessage name='password' />
          </div>
        </div>
      </div>
    )
  }

  renderSubmitButton (props) {
    return (
      <this.Button
        className='c-login__button o-button--sml'
        aria-label='Continue Securely'
        label='CONTINUE SECURELY'
        status={(props.isValid ? 'positive' : 'disabled')}
        type='submit'
        disabled={!props.isValid}
      />
    )
  }

  renderFormik (initialValues, loginSchema, handleSubmit, login) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        render={props => (
          <Form className='c-login__form'>
            <this.AccountFormErrors errors={login.errors} />
            { this.renderEmailInputField() }
            { this.renderPasswordInputField() }
            <div>
              <this.Checkbox label='Remember me' />
              { this.renderSubmitButton(props) }
            </div>
          </Form>
        )}
      />
    )
  }

  render () {
    const {
      className,
      handleSubmit,
      login
    } = this.props

    const initialValues = {
      email: '',
      password: ''
    }

    const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    })

    return (
      <div className={classNames('o-form', className)}>
        { this.renderFormik(initialValues, loginSchema, handleSubmit, login) }
      </div>
    )
  }
}

export default LoginForm
