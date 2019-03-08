// Libraries
import React, { Component } from 'react'
import { SearchBox } from 'react-instantsearch/dom'

export class SearchBar extends Component {
  render () {
    return (
      <div className='c-searchbar'>
        <div className='c-searchbar__content'>
          <SearchBox />
        </div>
      </div>
    )
  }
}

export default SearchBar
