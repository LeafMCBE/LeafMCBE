import { readdir } from 'fs/promises'
import { Command } from './Base'
import { Player as Client } from 'bedrock-protocol'
import Player from '../Player'
import Colors from '../../utils/Colors'

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

    for (const command of this.commands) {
      if (
        cmd === command.options.name ||
        (command.options.aliases &&
          command.options.aliases.includes(cmd.toLowerCase()))
      ) {
        did = true
        if (
          command.options.arguments &&
          command.options.arguments[0] &&
          command.options.arguments[1]
        ) {
          const { max, min } = command.options.arguments[1]

          if (max !== -1 && parameters.length > max) {
            return console.error(
              Colors.red(
                `Syntax Error: Maximum Arguments is ${max} but received ${parameters.length}`,
                true
              ),
              'Command'
            )
          }

          if (min > parameters.length) {
            return console.error(
              Colors.red(
                `Syntax Error: Minimum Arguments is ${min} but received ${parameters.length}`,
                true
              ),
              'Command'
            )
          }

          command.run(null, parameters)
        }
      }
    }

    if (!did) {
      console.error(
        Colors.red(
          'Unknown command. Please check /help for more information',
          true
        ),
        'Command'
      )
    }
  }

  requestOnMinecraft (client: Client, cmd: string, parameters: string[]) {
    const player = new Player(client)
    let did = false

    for (const command of this.commands) {
      if (
        cmd === command.options.name ||
        (command.options.aliases &&
          command.options.aliases.includes(cmd.toLowerCase()))
      ) {
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
