/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TextType } from '../Text'
import Server from '../../Server'
import Player from '../../api/Player'

const PacketText = (server: Server, client: any, packet: any) => {
  const maybe = () => {
    const txt = new Text()
      .setMessage(
        `<${client.getUserData().displayName}> ${packet.data.params.message}`
      )
      .setType(TextType.Chat)
      .setNeedsTranslation(false)
      .setSourceName('')
      .setPlatformChatId('')
      .setXuid('')

    for (const player of server.players) {
      txt.execute(player.client)
    }
  }

  server.plugins.do('onPlayerChat', maybe, new Player(client))
}

export default PacketText
