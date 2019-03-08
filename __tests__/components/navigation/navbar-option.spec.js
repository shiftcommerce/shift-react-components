import React from 'react'

// Libraries
import componentMapping from '../../../src/lib/component-mapping'

// Components
import NavBarOption from '../../../src/components/navigation/navbar-option'

test('renders the links', () => {
  // Arrange
  const emptyFunction = () => { }
  const Link = componentMapping('Link')
  // Act
  const wrapper = shallow(
    <NavBarOption title='Mens' href='/slug?slug=/categories/mens' as='/categories/mens' onClick={emptyFunction} />
  )

  // Assert
  expect(wrapper).toMatchSnapshot()
  expect(wrapper).toContainReact(<Link href='/slug?slug=/categories/mens' as='/categories/mens' className='c-nav__option' onClick={emptyFunction} ><div className='c-nav__option-label'>Mens</div><div className='c-nav__option-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Link>)
})
