// Libraries
import React, { PureComponent } from 'react'
import classNames from 'classnames'

class Rating extends PureComponent {
  render () {
    const rating = Number(this.props.rating || 0)
    const className = this.props.className

    return (
      <span key={rating} className='o-rating'>
        {
          [1, 2, 3, 4, 5].map((key) => {
            return (
              <span key={key} className={classNames('o-rating__star', className, {
                'o-rating__star--fill': key <= rating,
                'o-rating__star--empty': key > rating
              })}>
                &#9733;
              </span>
            )
          })
        }
      </span>
    )
  }
}

export default Rating
