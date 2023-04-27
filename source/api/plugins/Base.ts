import Server from '../../Server'
import Logger from '../../console/Logger'
import Player from '../Player'
import API from './API'

export interface PluginOptions {
  name: string
  version: [number, number, number]
  serverVersion: [number, number, number]
}

export interface PluginOnPlayerBase {
  0: Player
}

export interface Plugin {
  onEnable(): void
  onDisable(): void
  onPlayerJoin(options: PluginOnPlayerBase): void
  onPlayerLeft(options: PluginOnPlayerBase): void
  onPlayerChat(options: PluginOnPlayerBase): void
}

export class Plugin {
  public readonly options: PluginOptions
  api: {
    getServer: () => Server
    getLogger: () => {
      info: (text: string) => void
      warn: (text: string) => void
      error: (text: string) => void
      debug: (text: string) => void
    }
  }

  constructor (options: PluginOptions) {
    this.options = options
    this.api = API(options)
  }
}
