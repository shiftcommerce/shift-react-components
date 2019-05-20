// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

// Lib
import businessDaysFromNow from '../../lib/business-days-from-now'
import componentMapping from '../../lib/component-mapping'

function ShippingMethodsSummary ({ headerTitle, onClick, shippingMethod }) {
  const ShippingMethodsHeader = componentMapping('ShippingMethodsHeader')
  const EstimatedDelivery = format(businessDaysFromNow(shippingMethod.meta_attributes.working_days.value), 'dddd Do MMMM')

  return (
    <div className='o-form c-shipping-method'>
      <ShippingMethodsHeader collapsed onClick={onClick} title={headerTitle} />
      <div className='o-form__wrapper--collapsed c-shipping-method__summary'>
        <p className='u-bold'>{ shippingMethod.label }</p>
        <p>
          <span className='u-bold'>Estimated Delivery</span>: {
            EstimatedDelivery
          }
        </p>
      </div>
    </div>
  )
}

ShippingMethodsSummary.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  shippingMethod: PropTypes.object
}

export default ShippingMethodsSummary
