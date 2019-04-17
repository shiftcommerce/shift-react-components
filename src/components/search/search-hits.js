// Libraries
import React from 'react'
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch-dom'

// Components
import ProductListingCard from '../products/listing/product-listing-card'

/**
 * This is only exported for testing
 * @param {array} hits
 * @return {string} - HTML markup for the component
 */
const BaseSearchHits = (hits) => {
  return hits.map((hit, index) => {
    return <ProductListingCard
      title={hit.product_title}
      assetFileUrl={hit.product_asset_files[0].source}
      assetFileAltText={hit.product_asset_files[0].caption}
      minPrice={hit.product_min_current_price || 0}
      maxPrice={hit.product_max_current_price || 0}
      productPath={hit.product_path}
      productRating={hit.product_rating}
      key={hit.objectID}
    />
  })
}

/**
 * Renders how many results are displayed
 * @param {array} hits
 * @param {boolean} hasMore
 * @param {function} refine
 * @return {string} - HTML markup for the component
 */
const LoadMoreHits = (hits, hasMore, refine) => {
  const option = (hasMore, count) => {
    if (hasMore) {
      return <button className='c-product-listing__view-more-button' onClick={refine}>Load More</button>
    } else if (count > 0) {
      return <p className='c-product-listing__view-more-message'>Showing all results</p>
    } else {
      return <p className='c-product-listing__view-more-message'>There are no results for this search</p>
    }
  }

  return (
    <div className='c-product-listing__view-more'>
      { option(hasMore, hits.length) }
    </div>
  )
}

/**
 * Renders how many products of all results are displayed
 * @param {array} products
 * @param {object} allSearchResults
 * @return {string} - HTML markup for the component
 */
const productListingInfo = ({ products, allSearchResults }) => {
  return (
    <div className='c-product-listing__info'>
      <p className='c-product-listing__counts'>
        Showing { products.length } of { allSearchResults && allSearchResults.nbHits } products
      </p>
      <p className='c-product-listing__grid-toggles u-visible-d'>
        View <button className='c-product-listing__grid-toggle c-product-listing__grid-toggle--disabled'>2 </button>
        <button className='c-product-listing__grid-toggle'>4</button>
      </p>
    </div>
  )
}

/**
 * Wraps productListingInfo in connectStateResults (Algolia connector)
 * @param {function} productListingInfo
 * @return {string} - HTML markup for the component
 */
const ConnectedProductListingInfo = connectStateResults(productListingInfo)

/**
 * Displays results from Algolia index
 * @param {array} hits
 * @return {string} - HTML markup for the component
 */
const SearchResults = (results) => {
  const { hits, hasMore, refine } = results
  return (
    <>
      <ConnectedProductListingInfo products={hits} />
      <div className='c-product-listing__products'>
        { BaseSearchHits(hits) }
      </div>
      { LoadMoreHits(hits, hasMore, refine) }
    </>
  )
}

/**
 * Wraps SearchResults in connectInfiniteHits (Algolia connector)
 * @param {function} SearchResults
 * @return {string} - HTML markup for the component
 */
const SearchHits = connectInfiniteHits(SearchResults)

export { SearchResults, BaseSearchHits }
export default SearchHits
