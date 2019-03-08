import React, { PureComponent } from 'react'
import ReactLoading from 'react-loading'
import classNames from 'classnames'

class Loading extends PureComponent {
  render () {
    const {
      className,
      color = '#f5c6cb',
      delay = 250,
      width = 50,
      height = 50,
      type = 'spin'
    } = this.props

    return (
      <ReactLoading
        className={classNames(className, 'o-loading')}
        color={color}
        delay={delay}
        height={height}
        type={type}
        width={width}
      />
    )
  }
}

export default Loading
