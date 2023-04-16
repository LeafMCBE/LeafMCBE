import { Text, TextType } from "../packets/Text";

class Player {
  public readonly username: string;
  public readonly ip: string;
  public readonly client: any;
  public readonly kick: (reason: string) => void
  public readonly send: (message: string) => void

  constructor(client: any) {
    this.username = client.getUserData().displayName;
    this.ip = client.connection.address;
    this.client = client;

    this.kick = (reason: string) => {
      this.client.disconnect(reason || "Kicked by CONSOLE");
    } 

    this.send = (message: string) => {
      const txt = new Text()
      .setMessage(message)
      .setXuid("")
      .setSourceName("")
      .setPlatformChatId("")
      .setNeedsTranslation(false)
      .setType(TextType.Chat);

      txt.execute(this.client)
    }
  }
}

export default Player;
