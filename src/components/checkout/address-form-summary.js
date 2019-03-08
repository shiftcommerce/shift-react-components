// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

function AddressFormSummary ({ addressLine1, city, firstName, lastName, onClick, postcode }) {
  const AddressFormHeader = componentMapping('AddressFormHeader')

  return (
    <>
      <AddressFormHeader
        collapsed
        onClick={onClick}
        title='Shipping Address'
      />
      <div className='o-form__wrapper--collapsed c-address-form__summary'>
        <p className='u-bold'>{ firstName } { lastName } </p>
        <span>{ addressLine1 }, { city }, { postcode }</span>
      </div>
    </>
  )
}

AddressFormSummary.propTypes = {
  addressLine1: PropTypes.string,
  city: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onClick: PropTypes.func,
  postcode: PropTypes.string
}

export default AddressFormSummary
