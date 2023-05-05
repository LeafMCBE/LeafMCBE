/* eslint-disable @typescript-eslint/no-explicit-any */
import validate from './server/Validator'
import launch from './server/Launch'
import logger from './console/Logger'
import Player from './api/Player'

import { parse } from 'yaml'
import { readFile } from 'fs/promises'
import Protocol, { Version } from 'bedrock-protocol'
import { Text, TextType } from './packets/Text'
import Colors from './utils/Colors'
import PacketSpawn from './packets/handlers/PacketSpawn'
import PacketText from './packets/handlers/PacketText'
import PacketClose from './packets/handlers/PacketClose'
import PacketJoin from './packets/handlers/PacketJoin'
import PluginManager from './api/plugins/Manager'
import Configuration from './types/Configuration'
import CommandsManager from './api/commands/Manager'
import PacketCmdReq from './packets/handlers/PacketCommandRequest'
import CCS from './console/Console'
import RPSClientResponse from './packets/handlers/ResourcePackClientResponse'

class Server {
  public config: Configuration
  private srv: Protocol.Server
  public readonly players: Player[] = []
  public readonly plugins = new PluginManager()
  public readonly commands = new CommandsManager()

  constructor () {
    this.start()
  }

  private async start () {
    await validate()
    this.config = parse(await readFile('./leaf/config.yml', 'utf-8'))
    if (this.config.LeafMCBE.Terminal.debug) {
      process.env.DEBUG = '*'
    }
    await logger(this.config)

    await this.startSrv()
  }

  private async startSrv () {
    const promise = new Promise<void>(resolve => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const srv = Protocol.createServer({
        host: this.config.Server.host,
        port: this.config.Server.port,
        motd: {
          levelName: 'Dedicated LeafMCBE Server',
          motd: String(this.config.Server.motd)
        },
        offline: false,
        maxPlayers: this.config.Server.max_players || 3,
        version: this.config.Server.version as Version
      })
      this.srv = srv

      launch(this)
      this.handle()
      this.plugins.do('onEnable', null).then(async () => {
        resolve()
      })
    })

    promise.then(async () => {
      await CCS.prototype.start()
    })
  }

  private async handle () {
    this.srv.on('connect', (client: Protocol.Player) => {
      client.on('join', () => PacketJoin(this, client))
      client.on('spawn', () => PacketSpawn(this, client))
      client.on('close', () => PacketClose(this, client))

      client.on('packet', pkt => {
        if (!client) return

        this.handlePkt(client, pkt)
      })
    })
  }

  private handlePkt (client: Protocol.Player, packet: any) {
    switch (packet.data.name) {
      case 'text':
        PacketText(this, client, packet)
        break
      case 'command_request':
        PacketCmdReq(this, client, packet)
        break
      case 'resource_pack_client_response':
        RPSClientResponse(client, packet, packet.data.params.response_status)
        break
    }
  }

  broadcast (message: string) {
    this.players.forEach(player => {
      const text = new Text()
        .setMessage(message)
        .setNeedsTranslation(false)
        .setPlatformChatId('')
        .setSourceName('')
        .setType(TextType.Announcement)
        .setXuid('')

      text.execute(player.client)
    })

    console.info(Colors.toConsole(message), 'Chat')
  }

  close (reason?: string) {
    this.players.forEach(player => {
      player.kick(reason || 'Server closed')
    })

    this.srv.close(reason || 'Server closed')
  }
}

export default Server
