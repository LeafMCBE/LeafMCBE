import { Command as Cmd } from '../commands/Base'

abstract class Command extends Cmd {
  register () {
    this.api.getServer().commands.add(this)
  }
}

export default Command
