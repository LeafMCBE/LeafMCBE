import server from '../../../start'
import Logger from '../../console/Logger'

const API = () => {
  return {
    getServer: () => server,
    getLogger: () =>
      new Logger({
        name: 'Command',
        debug: server.config.LeafMCBE.Terminal.debug,
        showDate: server.config.LeafMCBE.Terminal.showDate
      })
  }
}

export default API
