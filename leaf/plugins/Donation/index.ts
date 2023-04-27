import { Plugin, PluginOnPlayerBase } from '../../../source/api/plugins/Base'
import Colors from '../../../source/utils/Colors'

class Donation extends Plugin {
  private readonly texts: string[]

  constructor () {
    super({
      name: 'Donation',
      version: [1, 0, 0],
      serverVersion: [1, 19, 63]
    })

    this.texts = [
      'If you found this project useful, please support us by KoFi!',
      Colors.bold('http://ko-fi.com/hvlxh')
    ]
  }

  onEnable (): void {
    this.texts.forEach((t) => {
      this.api.getLogger().info(Colors.toConsole(t))
    })
  }

  onPlayerJoin (options: PluginOnPlayerBase): void {
    this.texts.forEach((t) => {
      options[0].send(t)
    })
  }
}

export default Donation
