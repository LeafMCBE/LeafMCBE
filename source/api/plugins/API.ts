import server from '../../../start'
import { PluginOptions } from './Base'

const Logger = (name: string) => {
  return {
    info: (text: string) => {
      console.info(text, name)
    },

    warn: (text: string) => {
      console.warn(text, name)
    },

    error: (text: string) => {
      console.error(text, name)
    },

    debug: (text: string) => {
      console.debug(text, name)
    }
  }
}

const API = (options: PluginOptions) => {
  return {
    getServer: () => server,
    getLogger: () => Logger(options.name)
  }
}

export default API
