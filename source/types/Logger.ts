import Logger from '../console/Logger'

export interface Loggers {
  srv: Logger
  chat: Logger
}

export interface LoggerOptions {
  debug?: boolean
  showDate?: boolean
  name: string
}

export type LoggerLevel = 'info' | 'warn' | 'error' | 'debug'
