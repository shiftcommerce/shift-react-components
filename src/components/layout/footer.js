// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'

// Assets
import facebookIcon from '../../static/facebook.svg'
import instagramIcon from '../../static/instagram.svg'
import twitterIcon from '../../static/twitter.svg'

export class Footer extends Component {
  constructor (props) {
    super(props)

    this.Image = componentMapping('Image')
  }

  renderFooter () {
    return (
      <>
        <div className='c-footer__links'>
          <a>FAQs</a><a>About</a><a>Delivery</a><a>Stores</a><a>Contact</a>
        </div>
        <div className='c-footer__social'>
          <div className='c-footer__social-text'>
            <a>Connect with ShopGo</a>
          </div>
          <div className='c-footer__social-links'>
            <this.Image src={facebookIcon} />
            <this.Image src={instagramIcon} />
            <this.Image src={twitterIcon} />
          </div>
        </div>
      </>
    )
  }

  render () {
    return (
      <div>
        { this.renderFooter() }
      </div>
    )
  }
}

export default Footer
