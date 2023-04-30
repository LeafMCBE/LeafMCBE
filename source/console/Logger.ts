import { LoggerLevel as Lvl } from '../types/Logger'
import Colors from '../utils/Colors'

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

  const backup = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  }

  console.info = (text: string, group: string) => {
    const d = new Date().toLocaleString().toUpperCase().replace(',', '')
    backup.info(`[${d} ${colorize('info')}] [${group}] ${text}`)
  }

  console.warn = (text: string, group: string) => {
    const d = new Date().toLocaleString().toUpperCase().replace(',', '')
    backup.warn(`[${d} ${colorize('warn')}] [${group}] ${text}`)
  }

  console.error = (text: string, group: string) => {
    const d = new Date().toLocaleString().toUpperCase().replace(',', '')
    backup.error(`[${d} ${colorize('error')}] [${group}] ${text}`)
  }

  console.debug = (text: string, group: string) => {
    const d = new Date().toLocaleString().toUpperCase().replace(',', '')
    backup.debug(`[${d} ${colorize('debug')}] [${group}] ${text}`)
  }
}

export default logger
