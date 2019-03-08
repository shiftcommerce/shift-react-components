// Libraries
import { connectCurrentRefinements } from 'react-instantsearch/connectors'

const SearchRefinements = connectCurrentRefinements(({ items }) => {
  return `${items.length} of 3`
})

export default SearchRefinements
