import { Player as Client } from 'bedrock-protocol'
import Server from '../../Server'
import Player from '../../api/Player'
import { readFile } from 'fs/promises'
import AvailableCommands from '../request/AvailableCommands'

import ResourcePacksInfo from '../private/ResourcePacksInfo'
import RPSClientResponse from '../private/ResourcePackClientResponse'

const PacketJoin = (server: Server, client: Client) => {
  if (!client) return

  const player = new Player(client)
  server.players.push(player)
  console.info(`${player.username}[${player.ip}] connected`, 'Server')

  new ResourcePacksInfo()
    .setMustAccept(false)
    .setHasScripts(false)
    .setBehaviourPacks([])
    .setTexturePacks([])
    .send(client)

  client.once('resource_pack_client_response', async packet => {
    RPSClientResponse(client, packet)
  })
}

export default PacketJoin
