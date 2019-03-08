// Libraries
import React, { Component } from 'react'
import { connectStateResults } from 'react-instantsearch-dom'

class ProductMenu extends Component {
  render () {
    const searchQuery = this.props.searchState.query
    let searchTitle = 'Showing all products'

    if (searchQuery) {
      searchTitle = `Search "${searchQuery}"`
    }

    return (
      <div className='c-product-listing__menu-description'>
        <h1 className='c-product-listing__menu-description-title'>
          { this.props.title || searchTitle }
        </h1>
      </div>
    )
  }
}

export default connectStateResults(ProductMenu)
