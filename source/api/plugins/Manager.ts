import { readdir } from 'fs/promises'
import { Plugin } from './Base'

class PluginManager {
  public readonly plugins: Plugin[] = []

  constructor () {
    this.start()
  }

  private async start () {
    const folders = await readdir('leaf/plugins')
    for (const folder of folders) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Plugin = require(`../../../leaf/plugins/${folder}/index`).default
      this.plugins.push(new Plugin())
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async do (event: string, falseDo: () => void, ...parameters: any) {
    let did = false
    for await (const plu of this.plugins) {
      if (plu[event]) {
        const para = Object.assign({}, parameters)
        const v = plu[event](para)
        if (v) {
          if (falseDo) falseDo()
        }
        did = true
      }
    }

    if (!did) falseDo()
  }
}

export default PluginManager
