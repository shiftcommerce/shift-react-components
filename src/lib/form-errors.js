// Libraries
import React, { Component } from 'react'

class FormErrors extends Component {
  render () {
    const { errors } = this.props
    if (errors.length === 0) {
      return null
    }

    window.scrollTo(0, 0)
    return (
      errors.map((error, index) => {
        return <div key={index} className='c-account-errors'>
          <h1>There has been a problem processing your request:</h1>
          <li>{ error.detail }</li>
        </div>
      })
    )
  }
}

export default FormErrors
