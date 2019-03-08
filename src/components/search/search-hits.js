// Libraries
import React from 'react'
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch-dom'

// Components
import ProductListingCard from '../products/listing/product-listing-card'

/**
 * This is only exported for testing
 * @param {array} variantGroups
 * @return {string} - HTML markup for the component
 */
const BaseSearchHits = (variantGroups) => {
  return variantGroups.map((variantGroup, index) => {
    return <ProductListingCard
      title={variantGroup[0].product_title}
      assetFileUrl={variantGroup[0].product_assets[0].url}
      assetFileAltText={variantGroup[0].product_assets[0].alt_text}
      minPrice={Math.min(...variantGroup.map(variant => variant.variant_meta_data.eu.price))}
      maxPrice={Math.max(...variantGroup.map(variant => variant.variant_meta_data.eu.price))}
      productPath={variantGroup[0].product_path}
      productRating={variantGroup[0].product_rating}
      key={variantGroup[0].objectID}
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
const LoadMoreHits = ({ hits, hasMore, refine }) => {
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
 * @param {boolean} hasMore
 * @param {function} refine
 * @return {string} - HTML markup for the component
 */
const SearchResults = (hits, hasMore, refine) => {
  const products = groupVariants(hits.hits)

  return (
    <>
      <ConnectedProductListingInfo products={products} />
      <div className='c-product-listing__products'>
        { BaseSearchHits(products) }
      </div>
      { LoadMoreHits(hits, hasMore, refine) }
    </>
  )
}

/**
 * Groups variants (i.e. hits) by product reference, returns an array of arrays,
 * each sub-array is a group of variants
 * @param {array} hits
 * @return {string} - HTML markup for the component
 */
const groupVariants = (hits) => {
  return Object.values(hits.reduce((products, variant) => {
    if (!products[variant.product_reference]) products[variant.product_reference] = []
    products[variant.product_reference].push(variant)
    return products
  }, {}))
}

/**
 * Wraps SearchResults in connectInfiniteHits (Algolia connector)
 * @param {function} SearchResults
 * @return {string} - HTML markup for the component
 */
const SearchHits = connectInfiniteHits(SearchResults)

export { SearchResults, BaseSearchHits }
export default SearchHits
