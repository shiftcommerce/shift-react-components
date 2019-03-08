// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'

import componentMapping from '../../lib/component-mapping'

/**
 * Display the wrapper for the static page error, which includes the error
 * body, and the error details
 */
class StaticPageError extends PureComponent {
  render () {
    const StaticPageErrorBody = componentMapping('StaticPageErrorBody')
    const StaticPageErrorDetails = componentMapping('StaticPageErrorDetails')

    return (
      <div className={classNames(this.props.className, 'c-static-page-error')}>
        <StaticPageErrorBody
          title={this.props.title}
          subtitle={this.props.subtitle}
          className={this.props.bodyClassName}
        />
        <StaticPageErrorDetails
          errorDetails={this.props.errorDetails}
          isProduction={this.props.isProduction}
          className={this.props.detailsClassName}
        />
        { this.props.children }
      </div>
    )
  }
}

export default StaticPageError
