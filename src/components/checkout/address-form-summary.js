// Libraries
import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class AddressFormSummary extends PureComponent {
  constructor (props) {
    super(props)

    this.AddressFormHeader = componentMapping('AddressFormHeader')
  }

  renderAddress () {
    const { 
      addressLine1,
      city,
      firstName,
      lastName,
      postcode
    } = this.props

    return(
      <div className='o-form__wrapper--collapsed c-address-form__summary'>
        <p className='u-bold'>{firstName} {lastName} </p>
        <span>{addressLine1}, {city}, {postcode}</span>
      </div>
    )
  }

  render () {
    const {
      headerTitle,
      onClick,
      showEditButton
    } = this.props

    return (
      <Fragment>
        <this.AddressFormHeader
          collapsed
          onClick={onClick}
          showEditButton={showEditButton}
          title={headerTitle}
        />
        {this.renderAddress()}
      </Fragment>
    )
  }
}

AddressFormSummary.propTypes = {
  addressLine1: PropTypes.string,
  city: PropTypes.string,
  firstName: PropTypes.string,
  headerTitle: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  onClick: PropTypes.func,
  postcode: PropTypes.string,
  showEditButton: PropTypes.bool
}

export default AddressFormSummary
