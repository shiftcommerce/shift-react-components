// Libraries
import React, { Component } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

export class SearchBar extends Component {
  render () {
    const { currentRefinement, refine } = this.props

    return (
      <div className='c-searchbar'>
        <div className='c-searchbar__content'>
          <div className='c-searchbox'>
            <form
              action=''
              className='c-searchbox__form'
              noValidate
              onSubmit={e => e.preventDefault()}
              role='search'
            >
              <input
                className='c-searchbox__input'
                onChange={event => refine(event.currentTarget.value)}
                type='search'
                value={currentRefinement}
              />
              <button
                className='c-searchbox__submit'
                title='Submit your search query.'
                type='submit'
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connectSearchBox(SearchBar)
