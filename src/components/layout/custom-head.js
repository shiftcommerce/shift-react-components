// Libraries
import React, { Component } from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'

class CustomHead extends Component {
  constructor (props) {
    super(props)

    this.Head = componentMapping('Head')
  }

  render () {
    const faviconPath = '../../static/favicon.png'
    const paypalClientID = 'sb'

    return (
      <this.Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
        <link rel='icon' type='image/png' sizes='32x32' href={faviconPath} key='favicon' />
        <script src='https://js.stripe.com/v3/' key='stripe' />
        <script src={ `https://www.paypal.com/sdk/js?components=buttons&client-id=${paypalClientID}&disable-funding=credit,sepa&disable-card=amex,visa,mastercard` } />
      </this.Head>
    )
  }
}

export default CustomHead
