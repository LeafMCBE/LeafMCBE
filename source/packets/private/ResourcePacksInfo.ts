import { Player as Client } from 'bedrock-protocol'

interface TexturePackInfos {
  uuid: string
  version: string
  size: number
  content_key: string
  sub_pack_name: string
  content_identity: string
  has_scripts: boolean
  rtx_enabled: boolean
}

type BehaviorPackInfos = Omit<TexturePackInfos, 'rtx_enabled'>

class ResourcePacksInfo {
  private mustAccept: boolean
  private hasScripts: boolean
  private behaviourPacks: BehaviorPackInfos[]
  private texturePacks: TexturePackInfos[]

  setMustAccept (accept: boolean) {
    this.mustAccept = accept

    return this
  }

  setHasScripts (scripts: boolean) {
    this.hasScripts = scripts

    return this
  }

  setBehaviourPacks (packs: BehaviorPackInfos[]) {
    this.behaviourPacks = packs

    return this
  }

  setTexturePacks (packs: TexturePackInfos[]) {
    this.texturePacks = packs

    return this
  }

  private toJSON () {
    function snakeCaseKeys (obj: object): object {
      if (Array.isArray(obj)) {
        return obj.map(v => snakeCaseKeys(v))
      } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
          const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
          acc[snakeKey] = snakeCaseKeys(obj[key])
          return acc
        }, {} as object)
      }
      return obj
    }

    const properties = Object.entries(this)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_key, value]) => typeof value !== 'function')
      .reduce((acc, [key, value]) => {
        acc[key] = value
        return acc
      }, {})

    return snakeCaseKeys(properties)
  }

  send (client: Client) {
    client.queue('resource_packs_info', this.toJSON())
  }
}

export default ResourcePacksInfo
