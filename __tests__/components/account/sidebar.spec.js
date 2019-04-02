// Libraries
import React from 'react'

// Component
import Sidebar from '../../../src/components/account/sidebar'

test("renders the correct child when currentMenu matches the child's label", () => {
  const Child1 = () => <p>Child1</p>
  const Child2 = () => <p>Child2</p>

  const wrapper = shallow(<Sidebar
    currentMenu='child2'
    menus={[{
      label: 'child1',
      component: Child1
    }, {
      label: 'child2',
      component: Child2
    }]}
  />)

  expect(wrapper.find(Child2)).toExist()
  expect(wrapper.find(Child1)).not.toExist()
})

test("doesn't render children when currentMenu doesn't match any labels", () => {
  const Child1 = () => <p>Child1</p>
  const Child2 = () => <p>Child2</p>

  const wrapper = shallow(<Sidebar
    currentMenu='child3'
    menus={[{
      label: 'child1',
      component: Child1
    }, {
      label: 'child2',
      component: Child2
    }]}
  />)

  expect(wrapper.find(Child2)).not.toExist()
  expect(wrapper.find(Child1)).not.toExist()
})
