import Config from '../../src/lib/config'

test('it is empty by default', () => {
  expect(Config.get()).toEqual({})
})

test('it persists key-value config options', () => {
  Config.set({ key: 'value' })
  expect(Config.get()).toEqual({ key: 'value' })
})

test('it can be reset', () => {
  Config.set({ another_key: 'another_value' })
  expect(Config.get()).toEqual({ another_key: 'another_value' })
  Config.reset()
  expect(Config.get()).toEqual({})
})
