class Config {
  constructor () {
    this.config = {}
  }

  set (newConfig) {
    this.config = Object.assign(this.config, newConfig)
    return this.config
  }

  get () {
    return this.config
  }

  reset () {
    this.config = {}
  }
}

export default new Config()
