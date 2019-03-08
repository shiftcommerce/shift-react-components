// Libraries
import React, { Component } from 'react'
import { connectRefinementList } from 'react-instantsearch/connectors'

// Lib
import componentMapping from '../../lib/component-mapping'

class SearchRatingFilter extends Component {
  constructor (props) {
    super(props)

    this.Rating = componentMapping('Rating')
  }

  renderRatingOptions () {
    const { refine, items } = this.props

    // orders Items by label descending
    const orderedItems = items.sort((a, b) => {
      return a['label'] - b['label']
    }).reverse()

    return (
      orderedItems.map((item, index) => {
        return (
          <li key={index} className='ais-RefinementList-item'>
            <label className='ais-RefinementList-label'>
              <input className='ais-RefinementList-checkbox' type='checkbox' checked={item.isRefined} onChange={() => { refine(item.value) }} />
              <span className='ais-RefinementList-labelText'>
                <this.Rating
                  rating={item.label}
                  className='o-rating__star--has-spacing'
                />
              </span>
              { '' }
              <span className='ais-RefinementList-count'>{ item.count.toLocaleString() }</span>
            </label>
          </li>
        )
      })
    )
  }

  render () {
    return (
      <div className='ais-RefinementList'>
        <ul className='ais-RefinementList-list'>
          { this.renderRatingOptions() }
        </ul>
      </div>
    )
  }
}

export default connectRefinementList(SearchRatingFilter)
