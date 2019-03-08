// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

class Button extends Component {
  render () {
    const {
      status, label, size, disabled = false,
      className, onClick, ...otherProps
    } = this.props

    return (
      <button
        className={classNames(
          className,
          'o-button',
          { [`o-button--${status}`]: status },
          { [`o-button--${size}`]: size },
          { 'o-button--disabled': disabled }
        )}
        tabIndex='0' role='button'
        disabled={disabled} onClick={onClick}
        {...otherProps}
      >
        { label }
      </button>
    )
  }
}

export default Button
