import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

class ProductCarousel extends Component {
  render () {
    const {
      assetFiles
    } = this.props

    const imageUrls = assetFiles.map(asset => asset.s3_url)

    return (
      <Carousel showStatus={false} useKeyboardArrows key={imageUrls}>
        { imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} />
        )) }
      </Carousel>
    )
  }
}

export default ProductCarousel
