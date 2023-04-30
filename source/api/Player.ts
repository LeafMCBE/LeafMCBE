/* eslint-disable @typescript-eslint/no-explicit-any */
import { Player as Client } from 'bedrock-protocol'
import { Text, TextType } from '../packets/Text'

class Player {
  public readonly username: string
  public readonly ip: string
  public readonly client: Client
  public readonly kick: (reason: string) => void
  public readonly send: (message: string) => void

  constructor (client: Client) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.username = client.getUserData().displayName
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.ip = client.connection.address
    this.client = client

    this.kick = (reason: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.client.disconnect(reason || 'Kicked by CONSOLE')
    }

    this.send = (message: string) => {
      const txt = new Text()
        .setMessage(message)
        .setXuid('')
        .setSourceName('')
        .setPlatformChatId('')
        .setNeedsTranslation(false)
        .setType(TextType.Chat)

      txt.execute(this.client)
    }
  }
}

export default Player
