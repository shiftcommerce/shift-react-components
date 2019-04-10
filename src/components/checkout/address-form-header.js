// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

function AddressFormHeader ({ collapsed, title, onClick }) {
  const Button = componentMapping('Button')

  return (
    <div className='o-form__header c-address-form__header'>
      <div className='o-form__header-title c-address-form__header-title'>
        <h2>{ title }</h2>
      </div>
      { collapsed &&
          <Button
            label='Edit'
            status='secondary'
            className='o-button-edit'
            onClick={onClick}
          />
      }
    </div>
  )
}

AddressFormHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default AddressFormHeader
