import { Player as Client } from 'bedrock-protocol'
import Biomes from '../resources/Biomes'
import Entities from '../resources/Entities'
import CreativeContent from '../resources/CreativeContent'
import ResourcePackStack from '../private/ResourcePackStack'
import StartGame from '../resources/StartGame'
import AvailableCommands from '../request/AvailableCommands'
import Server from '../../Server'

function RPSClientResponse (server: Server, client: Client, packet: any, type: string) {
  function generateFlatChunk (): Buffer {
    const chunk = Buffer.alloc(16 * 16 * 256)
    chunk.fill(2) // fill entire buffer with 2

    return chunk
  }

  switch (type) {
    case 'completed':
      const chunkRadius = 4
      const playerZ = 0
      const playerX = 0

      client.queue('start_game', StartGame)
      client.queue('item_component', { entries: [] })
      client.queue('set_time', { time: 5433771 })
      client.queue('set_difficulty', { difficulty: 1 })
      client.queue('set_commands_enabled', { enabled: true })
      client.queue('biome_definition_list', Biomes)
      client.queue('available_entity_identifiers', Entities)
      client.queue('creative_content', { items: CreativeContent })
      client.queue('chunk_radius_update', {
        chunk_radius: chunkRadius
      })
      client.queue('available_commands', AvailableCommands(server))
      client.queue('player_hotbar', { selected_slot: 1, window_id: 'inventory', select_slot: true })

      client.queue('network_chunk_publisher_update', {
        coordinates: {
          x: 0,
          y: 0,
          z: 0
        },
        radius: 64,
        saved_chunks: []
      })

      for (let z = playerZ - chunkRadius; z <= playerZ + chunkRadius; z++) {
        for (let x = playerX - chunkRadius; x <= playerX + chunkRadius; x++) {
          const chunkData = generateFlatChunk()

          client.queue('level_chunk', {
            x,
            z,
            sub_chunk_count: 1,
            cache_enabled: false,
            payload: chunkData
          })
        }
      }

      setInterval(() => {
        client.queue('network_chunk_publisher_update', {
          coordinates: {
            x: 0,
            y: 0,
            z: 0
          },
          radius: 64,
          saved_chunks: []
        })
      }, 3500)

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
