import Config from '../../src/lib/config'

global.beforeEach(() => {
  // Start every spec with a clean config
  Config.reset()
})
