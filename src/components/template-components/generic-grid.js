// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'
import t from 'typy'

import componentMapping from '../../lib/component-mapping'

class GenericGrid extends PureComponent {
  constructor (props) {
    super(props)

    this.LazyLoad = componentMapping('LazyLoad')
    this.Link = componentMapping('Link')
  }

  /**
   * Use a forloop to build the slides
   * @param  {Object} componentData
   * @return {string} - HTML markup for the component
   */
  buildSlides (componentData) {
    const slides = []

    // Loop from 1 to 12, and check if each index has a value
    // The object keys are named like this:
    // `slide1_image`, `slide2_image`, `slide3_image`, ...
    for (let i of [...Array(12).keys()]) {
      const slideImage = componentData[`slide${i + 1}_image`]
      const slideText = componentData[`slide${i + 1}_text`]
      const slideLinkURL = componentData[`slide${i + 1}_url`]

      if (slideImage && slideText && slideLinkURL) {
        slides.push(
          <div className='o-card-grid__card' key={i}>
            <this.Link href={slideLinkURL[0].canonical_path}>
              <this.LazyLoad className='u-image-shadow'
                src={slideImage[0].canonical_path}
                imageHeight={componentData.image_height}
                imageWidth={componentData.image_width}
              />
              <p className='o-card-grid__title'>{ slideText }</p>
            </this.Link>
          </div>

        )
      }
    }
    return slides
  }

  /**
   * Render a link to a category
   * @param  {Object} componentData
   * @return {string} - HTML markup for the component
   */
  catButton (componentData) {
    return (
      <this.Link href={t(componentData, 'cat_url[0].canonical_path').safeObject} className='o-template-component__cat-button o-button o-button--primary'>
        { componentData.cat_text }
      </this.Link>
    )
  }

  render () {
    const { componentData, className } = this.props

    return (
      <section className={classNames(className, 'o-template-component u-center-align')}>
        <h1 className='c-component-header'>{ componentData.header }</h1>
        <div className='o-card-grid o-card-grid--3d-3m'>
          { this.buildSlides(componentData) }
        </div>
        { componentData.cat_url[0] && componentData.cat_text && this.catButton(componentData) }
      </section>
    )
  }
}

export default GenericGrid
