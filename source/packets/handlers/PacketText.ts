import { Client } from "bedrock-protocol";
import { Text, TextType } from "../Text";
import Server from "../../Server";

const PacketText = (server: Server, client: any, packet: any) => {
  const txt = new Text()
    .setMessage(
      `<${client.getUserData().displayName}> ${packet.data.params.message}`
    )
    .setType(TextType.Chat)
    .setNeedsTranslation(false)
    .setSourceName("")
    .setPlatformChatId("")
    .setXuid("");

  for (const player of server.players) {
    txt.execute(player.client);
  }
};

export default PacketText;
