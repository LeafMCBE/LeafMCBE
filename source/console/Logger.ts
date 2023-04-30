import { LoggerLevel as Lvl } from '../types/Logger'
import Colors from '../utils/Colors'
import server from '../../start'

const logger = () => {
  const colorize = (level: Lvl) => {
    const obj = {
      info: Colors.green('INFO', true),
      warn: Colors.yellow('WARN', true),
      error: Colors.red('ERROR', true),
      debug: Colors.white('DEBUG', true)
    }
    return obj[level]
  }

  ;['info', 'warn', 'error', 'debug'].forEach(type => {
    const backup = console[type]
    const d = new Date().toLocaleString().replace(',', '').toUpperCase()

    console[type] = (text: string, group: string) => {
      if (server.config.LeafMCBE.Terminal.showDate) {
        if (group) {
          if (server.config.LeafMCBE.Terminal.showGroup) {
            backup(`[${d} ${colorize(type as Lvl)}] [${group}] ${text}`)
          } else backup(`[${d} ${colorize(type as Lvl)}] ${text}`)
        } else {
          backup(`[${d} ${colorize(type as Lvl)}] ${text}`)
        }
      } else {
        if (group) {
          if (server.config.LeafMCBE.Terminal.showGroup) {
            backup(`[${colorize(type as Lvl)} | ${group}] ${text}`)
          } else backup(`${colorize(type as Lvl)} | ${text}`)
        } else {
          backup(`${colorize(type as Lvl)} | ${text}`)
        }
      }
    }
  })
}

export default logger
