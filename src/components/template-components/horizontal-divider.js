// Libraries
import React from 'react'
import classNames from 'classnames'

export default (props) => {
  const { className } = props

  return (
    <div className={classNames(className, 'o-template-component c-horizontal-divider')} />
  )
}
