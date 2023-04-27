import { LoggerOptions, LoggerLevel } from '../types/Logger'

class Logger {
  private readonly options: LoggerOptions

  constructor (options: LoggerOptions) {
    this.options = options
  }

  public info (text: string) {
    this.write(text, 'info')
  }

  public warn (text: string) {
    this.write(text, 'warn')
  }

  public error (text: string) {
    this.write(text, 'error')
  }

  public debug (text: string) {
    if (this.options.debug) this.write(text, 'debug')
  }

  private write (text: string, lvl: LoggerLevel) {
    console[lvl](text, this.options.name)
  }
}

export default Logger
