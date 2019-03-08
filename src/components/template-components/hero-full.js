// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'
import t from 'typy'

import componentMapping from '../../lib/component-mapping'

class HeroFull extends PureComponent {
  constructor (props) {
    super(props)

    this.LazyLoad = componentMapping('LazyLoad')
    this.Link = componentMapping('Link')
    this.ConditionalLink = componentMapping('ConditionalLink')
  }

  /**
   * Renders the hero heading, if it's available
   * @param  {Object} hero
   * @return {string} - HTML markup for the component
   */
  heroHeading (hero) {
    if (hero.heading) {
      return (
        <h1 className='c-component-header u-margin-top-none-des'>{ hero.heading }</h1>
      )
    }
  }

  /**
   * Renders the hero overlay, shouldDisplayOverlay returns true
   * @param  {Object} hero
   * @param  {string} currentPosition
   * @return {string} - HTML markup for the component
   */
  heroOverlay (hero, currentPosition) {
    let overlayPosition = hero.overlay_position ? hero.overlay_position[0] : 'below'

    if (this.shouldDisplayOverlay(hero, overlayPosition, currentPosition)) {
      let overlayStyles = { color: hero.overlay_text_colour, backgroundColor: hero.overlay_background_colour }
      let overlayClasses = `c-hero__overlay c-hero__overlay--overlap_${overlayPosition}_${hero.overlay_image_overlap} c-hero__overlay--offset_${overlayPosition}_${hero.overlay_image_overlap}_${this.overlaySize(hero)}`

      return (
        <div className={overlayClasses} style={overlayStyles}>
          { this.overlayPointer(hero.overlay_background_colour, overlayPosition, 'above') }
          <div className='c-hero__overlay_content'>
            { hero.overlay_title && <div className='c-hero__overlay_title'>{ hero.overlay_title }</div> }
            { hero.overlay_text && (<div className='u-whitespace_preline'>{ hero.overlay_text }</div>) }
            { this.heroButtons(hero) }
          </div>
          { this.overlayPointer(hero.overlay_background_colour, overlayPosition, 'below') }
        </div>
      )
    }
  }

  /**
   * Returns the number of overlay elements
   * @param  {Object} hero
   * @return {number}
   */
  overlaySize (hero) {
    let count = 0
    if (hero.overlay_title) { count += 2 }
    if (hero.overlay_text) { count++ }
    if (hero.overlay_link_1_url && hero.overlay_link_1_text) { count++ }
    return count
  }

  /**
   * Calculates if the overlay should be displayed, if the overlayPosition and
   * currentPosition are the same, and if the overlaySize isn't zero
   * @param  {Object} hero
   * @param  {string} overlayPosition
   * @param  {string} currentPosition
   * @return {boolean}
   */
  shouldDisplayOverlay (hero, overlayPosition, currentPosition) {
    // only render if the current position matches the component position
    const overlayPositionConditional = (overlayPosition === currentPosition)
    // Should display overlay if title, text or a link available
    const overlayDataConditional = this.overlaySize(hero) > 0

    return overlayPositionConditional && overlayDataConditional
  }

  /**
   * Displays an triangle, and sets the colour of the triangle
   * @param  {string} colour
   * @param  {string} overlayPosition
   * @param  {string} pointerPosition
   * @return {string} - HTML markup for the component
   */
  overlayPointer (colour, overlayPosition, pointerPosition) {
    // only render if the current position matches the component position
    if (overlayPosition !== pointerPosition) {
      let style = {}
      if (pointerPosition === 'below') {
        style['borderTopColor'] = colour
      } else {
        style['borderBottomColor'] = colour
      }
      return (
        <div className={`c-hero__overlay_pointer c-hero__overlay_pointer--${pointerPosition}`} style={style} />
      )
    }
  }

  /**
   * Renders buttons
   * @param  {object} hero
   * @return {string} - HTML markup for the component
   */
  heroButtons (hero) {
    let buttons = []
    let index = 1

    // Only start looping if first button is there
    if (hero.overlay_link_1_url && hero.overlay_link_1_text) {
      while (hero[`overlay_link_${index}_url`] && hero[`overlay_link_${index}_text`]) {
        const url = hero[`overlay_link_${index}_url`][0].canonical_path

        buttons.push(
          <div className='c-hero__button' key={index}>
            <this.Link href={`/slug?slug=${url}`} as={url} className='c-hero__button-icon'>
              { hero[`overlay_link_${index}_text`] }
            </this.Link>
          </div>
        )
        index++
      }
    }

    return buttons
  }

  render () {
    const { componentData } = this.props
    const href = t(componentData, 'overlay_link_1_url[0].canonical_path').safeObject
    const imgSrc = t(componentData, 'image[0].s3_url').safeObject
    const mobileSrc = t(componentData, 'mobile_image[0].s3_url').safeObject
    const componentClasses = classNames('o-template-component o-template-component--full-width c-hero', {
      'u-padding-top-des': !!componentData.background_colour
    })

    return (
      <section className={componentClasses} style={{ backgroundColor: componentData.background_colour }}>
        { this.heroHeading(componentData) }
        <div className='c-hero__content'>
          { this.heroOverlay(componentData, 'above') }
          <this.ConditionalLink href={href}>
            <this.LazyLoad className='c-hero__image' src={imgSrc} imageHeight={componentData.image_height} imageWidth={componentData.image_width} mobileSrc={mobileSrc} />
          </this.ConditionalLink>
          { this.heroOverlay(componentData, 'below') }
        </div>
      </section>
    )
  }
}

export default HeroFull
