import React, { Component } from 'react'

class Image extends Component {
  styles () {
    return {
      height: this.props.height,
      width: this.props.width
    }
  }

  responsiveImage (src, mobileSrc, otherProps) {
    const mobileBreakPoint = '(max-width: 768px)'

    return (
      <picture>
        { mobileSrc && <source media={mobileBreakPoint} srcSet={mobileSrc} /> }
        <img src={src} srcSet={`${src} 769w`} className='o-image' {...otherProps} />
      </picture>
    )
  }

  render () {
    const {
      src,
      mobileSrc,
      className,
      ...otherProps
    } = this.props

    if (src) {
      return (
        <div className={className}>
          { this.responsiveImage(src, mobileSrc, otherProps) }
        </div>
      )
    }

    // If no src is passed, return nothing
    return null
  }
}

export default Image
