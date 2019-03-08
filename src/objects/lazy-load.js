// Libraries
import React, { Component } from 'react'
import FadeIn from 'react-lazyload-fadein'

// Lib
import componentMapping from '../lib/component-mapping'

class LazyLoad extends Component {
  constructor (props) {
    super(props)

    this.Image = componentMapping('Image')
  }

  render () {
    const {
      src,
      className,
      imageHeight,
      imageWidth,
      offset = 150,
      backgroundColor = '#EEEFF3'
    } = this.props

    // Calculate the aspect ratio by dividing the width + height
    // then * 100 to calculate the percentage.
    const paddingBottom = (imageHeight / imageWidth * 100).toFixed(2)

    // This sets the outer div to be the same height as the image that is
    // being lazyloaded in so we dont see content getting pushed down.
    const divStyle = {
      paddingBottom: `${paddingBottom}%`,
      height: 0,
      width: '100%',
      backgroundColor: backgroundColor
    }

    return (
      <div style={divStyle}>
        <FadeIn
          once
          offset={offset}
          render={onload => (<this.Image src={src} className={className} onLoad={onload} />)}
        />
      </div>
    )
  }
}

export default LazyLoad
