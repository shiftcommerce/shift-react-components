// Libraries
import React, { Component } from 'react'
import InputRange from 'react-input-range'
import { connectRange } from 'react-instantsearch-dom'

class SearchSlider extends Component {
  render () {
    const { formatLabel, min, max } = this.props

    return min !== max ? (
      <div className='ais-RangeSlider'>
        <InputRange
          minValue={min}
          maxValue={max}
          value={{ min: this.props.currentRefinement.min, max: this.props.currentRefinement.max }}
          formatLabel={formatLabel}
          onChange={(sliderState) => { this.props.refine({ min: sliderState.min, max: sliderState.max }) }}
          onChangeComplete={this.refineSelection}
        />
      </div>
    ) : null
  }
}

export default connectRange(SearchSlider)
