import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const writeConfig = async () => {
  await writeFile(
    './leaf/config.yml',
    `Server:
  host: 0.0.0.0
  port: 19132
  motd: "Dedicated LeafMCBE Server"
  version: 1.19.80
LeafMCBE:
  Terminal:
    debug: true
    showDateOnLogging: true
    doNotCrashOnError: true`
  )
}

const validate = async () => {
  if (!existsSync('./leaf')) {
    await mkdir('./leaf')
  }
  if (!existsSync('./leaf/config.yml')) {
    await writeConfig()
  }
  if (!existsSync('./leaf/plugins')) {
    await mkdir('./leaf/plugins')
  }
  if (!existsSync('./leaf/players')) {
    await mkdir('./leaf/players')
  }
}

export default validate
