// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// lib
import componentMapping from '../../lib/component-mapping'

class RegisterForm extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.AccountFormErrors = componentMapping('FormErrors')
  }
  renderNameInputs () {
    return (
      <div className='o-flex o-flex__space-between'>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>First Name *</b></label>
            <Field className='c-register__input' type='firstName' name='firstName' placeholder='First Name' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='firstName' />
            </div>
          </div>
        </div>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>Last Name *</b></label>
            <Field type='lastName' name='lastName' placeholder='Last Name' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='lastName' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderEmailInputs () {
    return (
      <div className='o-flex o-flex__space-between'>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>Email *</b></label>
            <Field type='email' name='email' placeholder='Email' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='email' />
            </div>
          </div>
        </div>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>Confirm Email *</b></label>
            <Field className='o-form__input-block' type='confirmEmail' name='confirmEmail' placeholder='Confirm Email' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='confirmEmail' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderPasswordInputs () {
    return (
      <div className='o-flex o-flex__space-between'>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>Password *</b></label>
            <Field type='password' name='password' placeholder='Password' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='password' />
            </div>
          </div>
        </div>
        <div className='o-flex-full-width-s'>
          <div className='o-form__input-block'>
            <label className='o-form__label'><b>Confirm Password *</b></label>
            <Field type='password' name='confirmPassword' placeholder='Confirm Password' className='o-form__input-field o-form__input-block' />
            <div className='o-form__input-field__error'>
              <ErrorMessage name='confirmPassword' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderSubmitButton (props) {
    return (
      <this.Button
        className='c-register__button o-button-sml'
        aria-label='Create Account'
        label='Create Account'
        status={(props.isValid ? 'positive' : 'disabled')}
        type='submit'
        disabled={!props.isValid}
      />
    )
  }

  render () {
    const {
      className,
      handleSubmit,
      registration
    } = this.props

    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    }

    const registerSchema = Yup.object().shape({
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Must match')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .max(30, 'Password must be shorter than 30 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Must match')
    })

    return (
      <div className={classNames('o-form', className)}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
          render={props => (
            <>
              <this.AccountFormErrors errors={registration.errors} />
              <Form>
                <div>
                  { this.renderNameInputs() }
                  { this.renderEmailInputs() }
                  { this.renderPasswordInputs() }
                  <p>* Denotes required fields</p>
                  { this.renderSubmitButton(props) }
                </div>
              </Form>
            </>
          )}
        />
      </div>
    )
  }
}

export default RegisterForm
