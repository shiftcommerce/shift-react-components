import componentMapping from '../../src/lib/component-mapping'
import Config from '../../src/lib/config'
import Button from '../../src/objects/button'

class TestButton extends Button {}

test('it returns the default component class when not overriden in config', () => {
  expect(componentMapping('Button')).toEqual(Button)
})

test('it returns the overriding component when overriden in config', () => {
  Config.set({
    Button: TestButton
  })
  expect(componentMapping('Button')).toEqual(TestButton)
})
