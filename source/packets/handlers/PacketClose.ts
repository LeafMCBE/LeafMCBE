import { Client } from 'bedrock-protocol'
import Server from '../../Server'
import Player from '../../api/Player'
import Colors from '../../utils/Colors'

const PacketClose = (server: Server, client: Client) => {
  if (!client) return
  const player = new Player(client)
  const maybe = () =>
    server.broadcast(Colors.yellow(`${player.username} left`))

  delete server.players[
    server.players.findIndex((v) => v.username === player.username)
  ]

  server.plugins.do('onPlayerLeft', maybe, player)
}

export default PacketClose
