// Libraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Lib
import componentMapping from '../../lib/component-mapping'

class AddressFormHeader extends PureComponent {
  constructor (props) {
    super(props)

    this.Button = componentMapping('Button')
  }

  render () {
    const {
      collapsed,
      title,
      onClick,
      showEditButton
    } = this.props

    return (
      <div className='o-form__header c-address-form__header'>
        <div className='o-form__header-title c-address-form__header-title'>
          <h2>{ title }</h2>
        </div>
        { collapsed && showEditButton && <this.Button
            label='Edit'
            status='secondary'
            className='o-button-edit'
            onClick={onClick}
          />
        }
      </div>
    )
  }
}

AddressFormHeader.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  showEditButton: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default AddressFormHeader
