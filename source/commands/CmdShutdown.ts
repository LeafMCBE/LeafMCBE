import Player from '../api/Player'
import { Command } from '../api/commands/Base'

class CommandShutdown extends Command {
  constructor () {
    super({
      name: 'shutdown',
      description: 'Shutdown the server',
      aliases: ['close'],
      arguments: [
        [],
        {
          min: 0,
          max: 0
        }
      ]
    })
  }

  run (player?: Player): void {
    if (player) {
      return player.send('Server: This is an console-only command.')
    }

    this.api.getLogger().info('The server gonna shutdown in few seconds...')

    setTimeout(() => {
      this.api.getServer().close()
      process.exit(0)
    }, 3500)
  }
}

export default CommandShutdown
