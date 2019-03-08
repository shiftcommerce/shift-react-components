// Libraries
import React, { PureComponent } from 'react'
import t from 'typy'

import componentMapping from '../../lib/component-mapping'

class BannerImage extends PureComponent {
  constructor (props) {
    super(props)

    this.LazyLoad = componentMapping('LazyLoad')
    this.Link = componentMapping('Link')
  }

  render () {
    const { componentData, className } = this.props
    const imgSrc = t(componentData, 'image[0].s3_url').safeObject
    const mobileSrc = t(componentData, 'mobile_image[0].s3_url').safeObject
    const href = t(componentData, 'image_link[0].canonical_path').safeObject

    return (
      <this.Link href={href} as={href} className={className}>
        <this.LazyLoad className='c-banner-image' src={imgSrc} mobileSrc={mobileSrc} imageHeight={componentData.image_height} imageWidth={componentData.image_width} />
      </this.Link>
    )
  }
}

export default BannerImage
