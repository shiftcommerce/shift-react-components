// Libraries
import React from 'react'

/**
 * Basic Link element, which returns a standard anchor tag
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
export default function Link (props) {
  const { children, ...otherProps} = props
  return (
    <a {...otherProps}>{ children }</a>
  )
}
