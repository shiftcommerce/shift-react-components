// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// Lib
import componentMapping from '../../../lib/component-mapping'

export class ProductListing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filtersShown: false
    }

    this.Breadcrumb = componentMapping('Breadcrumb')
    this.ProductMenu = componentMapping('ProductMenu')
    this.ProductMenuOptions = componentMapping('ProductMenuOptions')
    this.SearchFilters = componentMapping('SearchFilters')
    this.SearchHits = componentMapping('SearchHits')
  }

  toggleFiltering = () => {
    if (this.state.filtersShown) {
      document.body.classList.remove('modal-open')
    } else {
      document.body.classList.add('modal-open')
    }

    this.setState({
      filtersShown: !this.state.filtersShown
    })
  }

  render () {
    const { title, facets, indexName } = this.props

    return (
      <>
        <this.ProductMenu title={title} />
        <this.Breadcrumb />
        <div className='c-product-listing-wrapper'>
          <this.SearchFilters facets={facets} filtersShown={this.state.filtersShown} toggleFiltering={this.toggleFiltering} />
          <div className={classNames('c-product-listing')}>
            <div className='c-product-listing__menu'>
              <this.ProductMenuOptions indexName={indexName} toggleFiltering={this.toggleFiltering} />
            </div>
            <this.SearchHits />
          </div>
        </div>
      </>
    )
  }
}

export default ProductListing
