import { Client } from 'bedrock-protocol'
import Server from '../../Server'
import Player from '../../api/Player'
import { readFile } from 'fs/promises'
import AvailableCommands from '../request/AvailableCommands'

const PacketJoin = (server: Server, client: Client) => {
  if (!client) return

  const player = new Player(client)
  server.players.push(player)
  console.info(`${player.username}[${player.ip}] connected`, 'Server')

  client.write('resource_packs_info', {
    must_accept: false,
    has_scripts: false,
    behaviour_packs: [],
    texture_packs: []
  })

  client.write('resource_pack_stack', {
    must_accept: false,
    behavior_packs: [],
    resource_packs: [],
    game_version: '',
    experiments: [],
    experiments_previously_used: false
  })

  client.once('resource_pack_client_response', async () => {
    const get = async (text: string) => {
      return JSON.parse(
        await readFile(`./network/packets/${text}.json`, 'utf-8')
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Item = require('bedrock-protocol/types/Item')('1.18.0')
    for (let i = 0; i < 3; i++) {
      client.queue('inventory_slot', {
        window_id: 120,
        slot: 0,
        item: new Item().toBedrock()
      })
    }

    client.queue('player_list', {
      records: {
        type: 0,
        records_count: 0,
        records: [],
        verified: []
      }
    })
    client.queue('start_game', await get('start_game'))
    client.queue('item_component', { entries: [] })
    client.queue('set_spawn_position', await get('set_spawn_position'))
    client.queue('set_time', { time: 5433771 })
    client.queue('set_difficulty', { difficulty: 1 })
    client.queue('set_commands_enabled', { enabled: true })
    client.queue('biome_definition_list', await get('biome_definition_list'))
    client.queue(
      'available_entity_identifiers',
      await get('available_entity_identifiers')
    )
    client.queue('update_attributes', await get('update_attributes'))
    client.queue('creative_content', await get('creative_content'))
    client.queue('inventory_content', {
      window_id: 'offhand',
      input: [
        {
          network_id: 0
        }
      ]
    })
    client.queue('player_hotbar', {
      selected_slot: 3,
      window_id: 'inventory',
      select_slot: true
    })
    client.queue('crafting_data', await get('crafting_data'))
    client.queue('available_commands', AvailableCommands(server))
    client.queue('chunk_radius_update', { chunk_radius: 1 })
    client.queue('game_rules_changed', await get('game_rules_changed'))
    client.queue('respawn', await get('respawn'))

    setTimeout(() => {
      client.write('play_status', { status: 'player_spawn' })
    }, 6000)
  })
}

export default PacketJoin
