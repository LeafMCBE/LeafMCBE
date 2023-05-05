import { Player as Client } from 'bedrock-protocol'
import ItemStates from '../resources/ItemStates'
import Biomes from '../resources/Biomes'
import Entities from '../resources/Entities'
import CreativeContent from '../resources/CreativeContent'
import ResourcePackStack from '../private/ResourcePackStack'
import StartGame from '../resources/StartGame'

function RPSClientResponse (client: Client, packet: any, type: string) {
  switch (type) {
    case 'completed':
      client.queue('start_game', StartGame)
      client.queue('biome_definition_list', Biomes)
      client.queue('available_entity_identifiers', Entities)
      client.queue('creative_content', { items: CreativeContent })

      setTimeout(() => {
        client.queue('play_status', {
          status: 3
        })
      }, 6000)
      break
    case 'have_all_packs':
      new ResourcePackStack()
        .setResourcePacks([])
        .setBehaviorPacks([])
        .setMustAccept(false)
        .setExperimentsPreviouslyUsed(false)
        .setGameVersion('')
        .send(client)

      break
  }
}

export default RPSClientResponse
