import server from '../../../start'

const Logger = () => {
  return {
    info: (text: string) => {
      console.info(text, 'Command')
    },

    warn: (text: string) => {
      console.warn(text, 'Command')
    },

    error: (text: string) => {
      console.error(text, 'Command')
    },

    debug: (text: string) => {
      console.debug(text, 'Command')
    }
  }
}

const API = () => {
  return {
    getServer: () => server,
    getLogger: () => Logger()
  }
}

export default API
