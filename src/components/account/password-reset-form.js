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

  renderSubmitButton() {
    return (
      <this.Button
        className='c-password__button o-button-sml'
        aria-label='Submit'
        label='submit'
        status='primary'
        type='submit'
      />
    )
  }

  render() {
    const {
      className,
      handleSubmit,
      account
    } = this.props

    console.log(this.props)

    const initialValues = {
      password: ''
    }

    const passwordSchema = Yup.object().shape({
      password: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .max(30, 'Password must be shorter than 30 characters')
        .required('Required'),
    })

    return (
      <div className={classNames('o-form', className)}>
        <div className='c-password'>
          <h1 className='c-password__title'>Password Reset</h1>
          <p className='c-password__caption'>Please enter your new password</p>
          <Formik
            initialValues={initialValues}
            validationSchema={passwordSchema}
            onSubmit={handleSubmit}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form>
                <this.AccountFormErrors errors={account.errors} />
                <Field type='password' name='password' placeholder='New Password' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='password' />
                </div>
                { this.renderSubmitButton() }
              </Form>
            )}
          />
        </div>
      </div>
    )
  }
}

export default PasswordResetForm
