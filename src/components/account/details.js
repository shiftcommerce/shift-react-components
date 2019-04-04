// Libraries
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Lib
import componentMapping from '../../lib/component-mapping'

class AccountDetails extends Component {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
    this.Flash = componentMapping('Flash')
  }

  renderFlash (status) {
    switch (status) {
      case 'success':
        return (<this.Flash modifier='success' text='Your details were successfully updated.' />)
      case 'error':
        return (<this.Flash modifier='error' text='Oops, there was an error submitting your form.' />)
    }
  }

  render () {
    const { email, firstName, handleSubmit, lastName } = this.props

    const validationSchema = Yup.object().shape({
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      emailConfirmation: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('email'), null], 'Must match')
    })

    return (
      <Formik
        enableReinitialize
        initialValues={{
          firstName: firstName || '',
          lastName: lastName || '',
          email: email || '',
          emailConfirmation: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={({ isSubmitting, isValid, status }) => {
          const submitEnabled = isValid && !isSubmitting
          return (
            <>
              {this.renderFlash(status)}
              <Form>
                <label className='o-form__input-label' htmlFor="firstName">First name</label>
                <Field type='text' name='firstName' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='firstName' />
                </div>

                <label className='o-form__input-label' htmlFor="lastName">Last name</label>
                <Field type='text' name='lastName' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='lastName' />
                </div>

                <label className='o-form__input-label' htmlFor="email">Email</label>
                <Field type='email' name='email' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='email' />
                </div>

                <label className='o-form__input-label' htmlFor="emailConfirmation">Email confirmation</label>
                <Field type='email' name='emailConfirmation' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='emailConfirmation' />
                </div>

                <this.Button
                  className='c-password__button o-button-sml u-margin-top-none u-margin-bottom-none'
                  aria-label='Update details'
                  label='Update details'
                  status='primary'
                  type='submit'
                  disabled={!submitEnabled}
                  status={submitEnabled ? 'positive' : 'disabled'}
                />
              </Form>
            </>
          )
        }}
      />
    )
  }
}

export default AccountDetails
