// Libraries
import React from 'react'

/**
 * Basic Link element, which returns a standard anchor tag
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
export default function Link (props) {
  const { href, className, children, onClick } = props

  return (
    <a href={href} onClick={onClick} className={className}>{ children }</a>
  )
}
