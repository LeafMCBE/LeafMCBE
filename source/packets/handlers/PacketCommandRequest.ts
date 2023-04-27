import { Client } from 'bedrock-protocol'
import Server from '../../Server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PacketCmdReq = (server: Server, client: Client, packet: any) => {
  const raw: string = packet.data.params.command
  const _ = raw.split(' ')
  const cmdName = _[0].replace('/', '')
  const __ = () => {
    if (_.length >= 1) {
      return _.filter((_v, i) => i !== 0)
    } else {
      return []
    }
  }
  const args =
    __()
      .join(' ')
      .match(/(?:[^\s"]+|"[^"]*")+/g) || []

  server.commands.requestOnMinecraft(client, cmdName, args)
}

export default PacketCmdReq
