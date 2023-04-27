export interface LoggerOptions {
  debug?: boolean
  showDate?: boolean
  name: string
}

export type LoggerLevel = 'info' | 'warn' | 'error' | 'debug'
