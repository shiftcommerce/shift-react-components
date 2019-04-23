// Libraries
import React from 'react'

// Lib
import componentMapping from '../../lib/component-mapping'

// Assets
import completedCheck from '../../static/white-check.svg'

export default () => {
  const Image = componentMapping('Image')

  return (
    <Image className='c-step-indicator__icon' src={completedCheck} />
  )
}
