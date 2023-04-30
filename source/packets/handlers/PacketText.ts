/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TextType } from '../Text'
import Server from '../../Server'
import Player from '../../api/Player'

const PacketText = (server: Server, client: any, packet: any) => {
  const maybe = () => {
    server.broadcast(
      `<${client.getUserData().displayName}> ${packet.data.params.message}`
    )
  }

  server.plugins.do('onPlayerChat', maybe, new Player(client))
}

export default PacketText
