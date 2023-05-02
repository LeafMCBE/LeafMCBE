import { Player as Client } from 'bedrock-protocol'
import ResourcePackStack from './ResourcePackStack'
import ItemStates from '../resources/ItemStates'
import Biomes from '../resources/Biomes'
import Entities from '../resources/Entities'
import CreativeContent from '../resources/CreativeContent'

enum RPStatus {
  None = 'none',
  Refused = 'refused',
  HaveAllPacks = 'have_all_packs',
  Completed = 'completed'
}

function RPSClientResponse (client: Client, packet: any) {
  client.once('resource_pack_client_response', async () => {
    const type = packet.data.params.response_status
    switch (type) {
      case RPStatus.HaveAllPacks:
        new ResourcePackStack()
          .setBehaviourPacks([])
          .setExperimentsPreviouslyUsed(false)
          .setGameVersion('')
          .setMustAccept(false)
          .setResourcePacks([])
          .send(client)
        break

      case RPStatus.Completed:
        client.queue('start_game', {
          entity_id: -1,
          runtime_entity_id: 1,
          player_gamemode: 'fallback',
          player_position: {
            x: 0,
            y: 0,
            z: 0
          },
          rotation: {
            x: 0,
            z: 0
          },
          seed: [923223871, 3168194463],
          biome_type: 'plains',
          biome_name: 'overworld',
          dimension: 1,
          difficulty: 0,
          spawn_position: {
            x: 0,
            y: 0,
            z: 0
          },
          achievements_disabled: true,
          editor_world: false,
          day_cycle_stop_time: 1,
          edu_offer: 0,
          edu_features_enabled: false,
          edu_product_uuid: '',
          rain_level: 0,
          lightning_level: 0,
          has_confirmed_platform_locked_content: false,
          is_multiplayer: true,
          broadcast_to_lan: true,
          xbox_live_broadcast_mode: 8,
          platform_broadcast_mode: 8,
          enable_commands: true,
          is_texturepacks_required: false,
          gamerules: [],
          experiments: [],
          experiments_previously_used: false,
          bonus_chest: false,
          map_enabled: false,
          permission_level: 0,
          server_chunk_tick_range: 4,
          has_locked_behavior_pack: false,
          has_locked_resource_pack: false,
          is_from_locked_world_template: false,
          msa_gamertags_only: false,
          is_from_world_template: false,
          is_world_template_option_locked: false,
          only_spawn_v1_villagers: false,
          persona_disabled: false,
          custom_skins_disabled: false,
          emote_chat_muted: false,
          game_version: '*',
          limited_world_width: 0,
          limited_world_length: 0,
          is_new_nether: false,
          edu_resource_uri: {
            button_name: '',
            link_uri: ''
          },
          experimental_gameplay_override: false,
          chat_restriction_level: 'none',
          disable_player_interactions: false,
          level_id: 'LeafMCBE',
          world_name: 'LeafMCBE',
          premium_world_template_id: '00000000-0000-0000-0000-000000000000',
          is_trial: false,
          movement_authority: 'server',
          rewind_history_size: 0,
          server_authoritative_block_breaking: false,
          current_tick: [-1, -1],
          enchantment_seed: 0,
          block_properties: [],
          itemstates: ItemStates
        })

        client.queue('biome_definition_list', Biomes)
        client.queue('available_entity_identifiers', Entities)
        client.queue('creative_content', CreativeContent)

        setTimeout(() => {
          client.queue('play_status', {
            status: 3
          })
        }, 6000)
        break
    }
  })
}

export default RPSClientResponse
