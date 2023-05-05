import { Player as Client } from 'bedrock-protocol'

interface ResourcePackIdVersions {
  uuid: string
  version: string
  name: string
}

class ResourcePackStack {
  private mustAccept: boolean
  private behaviorPacks: ResourcePackIdVersions[]
  private resourcePacks: ResourcePackIdVersions[]
  private experiments = []
  private gameVersion: string
  private experimentsPreviouslyUsed: boolean

  setMustAccept (accept: boolean) {
    this.mustAccept = accept

    return this
  }

  setBehaviorPacks (packs: ResourcePackIdVersions[]) {
    this.behaviorPacks = packs

    return this
  }

  setResourcePacks (packs: ResourcePackIdVersions[]) {
    this.resourcePacks = packs

    return this
  }

  setGameVersion (version: string) {
    this.gameVersion = version

    return this
  }

  setExperimentsPreviouslyUsed (used: boolean) {
    this.experimentsPreviouslyUsed = used

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
    client.queue('resource_pack_stack', this.toJSON())
  }
}

export default ResourcePackStack
