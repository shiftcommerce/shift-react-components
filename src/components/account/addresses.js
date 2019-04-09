// Libraries
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import t from 'typy'

// Lib
import componentMapping from '../../lib/component-mapping'

class AccountAddresses extends Component {
  constructor (props) {
    super(props)

    this.AddressBook = componentMapping('AddressBook')
    this.Button = componentMapping('Button')
    this.Flash = componentMapping('Flash')
  }

  getCurrentAddress () {
    const currentAddress = this.props.currentAddress || {}

    return {
      countryCode: t(currentAddress, 'country').safeObject || '',
      firstName: t(currentAddress, 'first_name').safeObject || '',
      lastName: t(currentAddress, 'last_name').safeObject || '',
      company: t(currentAddress, 'meta_attributes.company_name.value').safeObject || '',
      addressLine1: t(currentAddress, 'address_line_1').safeObject || '',
      addressLine2: t(currentAddress, 'address_line_2').safeObject || '',
      postcode: t(currentAddress, 'postcode').safeObject || '',
      city: t(currentAddress, 'city').safeObject || '',
      county: t(currentAddress, 'state').safeObject || '',
      phone: t(currentAddress, 'meta_attributes.phone_number.value').safeObject || '',
      email: t(currentAddress, 'meta_attributes.email.value').safeObject || '',
      label: t(currentAddress, 'meta_attributes.label.value').safeObject || '',
      preferredShipping: t(currentAddress, 'preferred_shipping').safeObject || '',
      preferredBilling: t(currentAddress, 'preferred_billing').safeObject || ''
    }
  }

  renderFlash (status) {
    switch (status) {
      case 'success-created':
        return (<this.Flash modifier='success' text='Address saved.' />)
      case 'success-updated':
        return (<this.Flash modifier='success' text='Address updated.' />)
      case 'error':
        return (<this.Flash modifier='error' text='Oops, there was an error submitting your form.' />)
    }
  }

  render () {
    const {
      addingNewAddress,
      addressBook,
      countries,
      currentAddress,
      currentAddressId,
      onAddressCreated,
      onAddressDeleted,
      onAddressUpdated,
      onBookAddressSelected,
      onNewAddress
    } = this.props

    const validationSchema = Yup.object().shape({
      countryCode: Yup.string()
        .required('Required'),
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      addressLine1: Yup.string()
        .required('Required'),
      postcode: Yup.string()
        .required('Required'),
      city: Yup.string()
        .required('Required'),
      phone: Yup.string()
        .matches(/^\d+$/, 'Must be numeric')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required')
    })

    return (
      <Formik
        enableReinitialize
        isInitialValid={!!currentAddress}
        initialValues={this.getCurrentAddress()}
        validationSchema={validationSchema}
        onSubmit={currentAddress ? onAddressUpdated : onAddressCreated}
        render={({ isSubmitting, isValid, status, values }) => {
          const submitEnabled = isValid && !isSubmitting
          return (
            <>
              {this.renderFlash(status)}
              <this.AddressBook
                addressBook={addressBook}
                addressFormDisplayed={false}
                currentAddressId={currentAddress && currentAddress.id}
                onAddressDeleted={onAddressDeleted}
                onBookAddressSelected={onBookAddressSelected}
                onNewAddress={onNewAddress}
              />
              { (addingNewAddress || currentAddress) && <Form className="o-form__wrapper o-form__background">
                <label className='o-form__input-label' htmlFor='countryCode'>Country *</label>
                <div className='o-form__input-group'>
                  <Field component='select' name='countryCode' className='o-form__input-field o-form__input-block' placeholder='Choose…'>
                    <option value=''>Choose…</option>
                    { countries.map(c => {
                      return (
                        <option value={c.value} key={c.id}>{c.title}</option>
                      )
                    }) }
                  </Field>
                </div>

                <label className='o-form__input-label' htmlFor='firstName'>First name *</label>
                <Field type='text' name='firstName' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='firstName' />
                </div>

                <label className='o-form__input-label' htmlFor='lastName'>Last name *</label>
                <Field type='text' name='lastName' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='lastName' />
                </div>

                <label className='o-form__input-label' htmlFor='company'>Company</label>
                <Field type='text' name='company' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='company' />
                </div>

                <label className='o-form__input-label' htmlFor='addressLine1'>Address Line 1 *</label>
                <Field type='text' name='addressLine1' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='addressLine1' />
                </div>

                <label className='o-form__input-label' htmlFor='addressLine2'>Address Line 2</label>
                <Field type='text' name='addressLine2' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='addressLine2' />
                </div>

                <label className='o-form__input-label' htmlFor='postcode'>Postcode *</label>
                <Field type='text' name='postcode' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='postcode' />
                </div>

                <label className='o-form__input-label' htmlFor='city'>City *</label>
                <Field type='text' name='city' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='city' />
                </div>

                <label className='o-form__input-label' htmlFor='county'>County</label>
                <Field type='text' name='county' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='county' />
                </div>

                <label className='o-form__input-label' htmlFor='phone'>Phone *</label>
                <Field type='text' name='phone' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='phone' />
                </div>

                <label className='o-form__input-label' htmlFor='email'>Email *</label>
                <Field type='email' name='email' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='email' />
                </div>

                <label className='o-form__input-label' htmlFor='label'>Label</label>
                <Field type='text' name='label' className='o-form__input-field o-form__input-block' />
                <div className='o-form__input-field__error'>
                  <ErrorMessage name='label' />
                </div>

                <div className='o-form__checkbox-group'>
                  <Field type='checkbox' name='preferredShipping' checked={values.preferredShipping} />
                  <label className='o-form__input-label' htmlFor='preferredShipping'>Preferred shipping address</label>
                  <div className='o-form__input-field__error'>
                    <ErrorMessage name='preferredShipping' />
                  </div>
                </div>

                <div className='o-form__checkbox-group'>
                  <Field type='checkbox' name='preferredBilling' checked={values.preferredBilling} />
                  <label className='o-form__input-label' htmlFor='preferredBilling'>Preferred billing address</label>
                  <div className='o-form__input-field__error'>
                    <ErrorMessage name='preferredBilling' />
                  </div>
                </div>

                <this.Button
                  className='c-password__button o-button-sml u-margin-top-none u-margin-bottom-none'
                  aria-label='Update details'
                  label={currentAddress ? 'Update address' : 'Create address'}
                  status='primary'
                  type='submit'
                  disabled={!submitEnabled}
                  status={submitEnabled ? 'positive' : 'disabled'}
                />
              </Form> }
            </>
          )
        }}
      />
    )
  }
}

export default AccountAddresses
