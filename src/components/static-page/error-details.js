// Libraries
import React, { Component, Fragment } from 'react'
import classNames from 'classnames'

class StaticPageErrorDetails extends Component {
  constructor (props) {
    super(props)
    this.state = { detailsShown: props.detailsShown }

    this.toggleDetails = this.toggleDetails.bind(this)
  }

  /**
   * Flip the detailsShown boolean in the state
   */
  toggleDetails () {
    this.setState(prevState => ({
      detailsShown: !prevState.detailsShown
    }))
  }

  /**
   * Render the error details
   * @param  {Object} errors
   * @return {string} - HTML markup for the component
   */
  renderErrors (errorDetails) {
    const content = []

    for (let i in errorDetails) {
      content.push(
        <Fragment key={i}>
          <p className='c-static-page-error-details__title'>{ i }</p>
          <p className='c-static-page-error-details__value'>{ errorDetails[i] }</p>
        </Fragment>
      )
    }

    return content
  }

  render () {
    const { errorDetails, className, isProduction = true } = this.props

    if (isProduction || errorDetails.length === 0) {
      return null
    }

    return (
      <div className={classNames(className, 'c-static-page-error-details')}>
        { this.state.detailsShown ? null : (
          <p className='c-static-page-error-details__toggle' onClick={this.toggleDetails}>Show details</p>
        ) }
        { this.state.detailsShown ? (
          <>
            <p className='c-static-page-error-details__toggle' onClick={this.toggleDetails}>Hide details</p>
            <div className='c-static-page-error-details__list'>
              { this.renderErrors(errorDetails) }
            </div>
          </>
        ) : null }
      </div>
    )
  }
}

export default StaticPageErrorDetails
