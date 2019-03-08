import React, { Component } from 'react'
import componentMapping from '../lib/component-mapping'
import classNames from 'classnames'

class Breadcrumb extends Component {
  constructor (props) {
    super(props)

    this.Link = componentMapping('Link')
  }

  /**
   * Render the breadcrumb item
   * @param  {object} crumb
   * @param  {mixed}  key
   * @return {string} - HTML markup for the component
   */
  renderBreadcrumbItem (crumb, key) {
    // The href for the Home link is different to the others, which are pulled
    // from the platform, so handle a direct href differently
    const href = crumb.href || `${crumb.page}?id=${crumb.id}`

    return (
      <li className='o-breadcrumb__item' key={key}>
        <this.Link
          href={href}
          as={crumb.canonical_path}
          className='o-breadcrumb__link'
        >
          { crumb.title }
        </this.Link>
      </li>
    )
  }

  /**
   * Render the breadcrumb trail
   * @param  {array} trail
   * @return {string} - HTML markup for the component
   */
  renderBreadcrumbTrail (trail) {
    return (
      trail && trail.map((crumb, id) => {
        return this.renderBreadcrumbItem(crumb, id)
      })
    )
  }

  /**
   * @return {string} - HTML markup for the component
   */
  render () {
    const { trail, className } = this.props

    return (
      <nav>
        <ol className={classNames(className, 'o-breadcrumb')}>
          { this.renderBreadcrumbItem({
            href: '/home/index',
            canonical_path: '/',
            title: 'Home',
            key: 0
          }) }

          { this.renderBreadcrumbTrail(trail) }
        </ol>
      </nav>
    )
  }
}

export default Breadcrumb
