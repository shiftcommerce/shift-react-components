// Libraries
import React, { Component } from 'react'

import componentMapping from '../lib/component-mapping'

// This object conditionally wraps children in a link if
// the passed URL is present
class ConditionalLink extends Component {
  constructor (props) {
    super(props)

    this.Link = componentMapping('Link')
  }

  render () {
    const { href, children, className } = this.props

    if (href) {
      return (
        <this.Link href={`/slug?slug=${href}`} as={href} className={className}>
          { children }
        </this.Link>
      )
    } else {
      return children
    }
  }
}

export default ConditionalLink
