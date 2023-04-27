import { readdir } from 'fs/promises'
import { Command } from './Base'
import { Client } from 'bedrock-protocol'
import Player from '../Player'
import Colors from '../../utils/Colors'
import Logger from '../../console/Logger'

class CommandsManager {
  private readonly commands: Command[] = []

  constructor () {
    this.start()
  }

  private async start () {
    const files = await readdir('./source/commands')
    for (const file of files) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Cmd = require(`../../commands/${file.replace('.ts', '')}`).default

      this.commands.push(new Cmd())
    }
  }

  requestOnConsole (cmd: string, parameters: string[]) {
    let did = false
    const logger = new Logger({ name: 'Command' })

    for (const command of this.commands) {
      if (cmd === command.options.name) {
        did = true
        const { max, min } = command.options.arguments[1]

        if (max !== -1 && parameters.length > max) {
          return logger.error(
            Colors.red(
              `Syntax Error: Maximum Arguments is ${max} but received ${parameters.length}`,
              true
            )
          )
        }

        if (min > parameters.length) {
          return logger.error(
            Colors.red(
              `Syntax Error: Minimum Arguments is ${min} but received ${parameters.length}`,
              true
            )
          )
        }

        command.run(null, parameters)
      }
    }

    if (!did) {
      logger.error(
        Colors.red(
          'Unknown command. Please check /help for more information',
          true
        )
      )
    }
  }

  requestOnMinecraft (client: Client, cmd: string, parameters: string[]) {
    const player = new Player(client)
    let did = false

    for (const command of this.commands) {
      if (cmd === command.options.name) {
        did = true
        const { max, min } = command.options.arguments[1]

        if (max !== -1 && parameters.length > max) {
          return player.send(
            Colors.red(
              `Syntax Error: Maximum Arguments is ${max} but received ${parameters.length}`
            )
          )
        }

        if (min > parameters.length) {
          return player.send(
            Colors.red(
              `Syntax Error: Minimum Arguments is ${min} but received ${parameters.length}`
            )
          )
        }

        command.run(player, parameters)
      }
    }

    if (!did) {
      player.send(
        Colors.red('Unknown command. Please check /help for more information')
      )
    }
  }

  add (cmd: Command) {
    this.commands.push(cmd)
  }

  getAll (): Command[] {
    return this.commands
  }
}

export default CommandsManager
