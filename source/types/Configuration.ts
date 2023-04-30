interface Configuration {
  Server: {
    host: string
    port: number
    motd: string
    version: string
    max_players: number
    offline: boolean
  }

  LeafMCBE: {
    Terminal: {
      debug: boolean
      showDate: boolean
      showGroup: boolean
      showPrompt: boolean
    }
  }
}

export default Configuration
