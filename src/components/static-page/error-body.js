// Libraries
import React from 'react'
import classNames from 'classnames'

/**
 * Display the title and subtitle for the error page
 * @param  {Object} props
 * @return {string} - HTML markup for the component
 */
const StaticPageErrorBody = (props) => {
  const strings = {
    title: 'Oh no, something went wrong.',
    subtitle: 'We weren\'t able to process your request.'
  }

  return (
    <div className={classNames(props.className, 'c-static-page-error-body')}>
      <h1>{ props.title || strings.title }</h1>
      <h2>{ props.subtitle || strings.subtitle }</h2>
      { props.children }
    </div>
  )
}

export default StaticPageErrorBody
