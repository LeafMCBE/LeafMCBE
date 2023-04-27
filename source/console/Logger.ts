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

  ;['info', 'warn', 'error', 'debug'].forEach(type => {
    const backup = console[type]
    const d = new Date().toLocaleString().replace(',', '').toUpperCase()

    /**
     * log something y'all.
     * @param text as string
     * @param group as string
     */
    console[type] = (text: string, group?: string) => {
      if (group) {
        backup(`[${d} ${colorize(type as Lvl)}] [${group}] ${text}`)
      } else {
        backup(`[${d} ${colorize(type as Lvl)}] ${text}`)
      }
    }
  })
}

export default logger
