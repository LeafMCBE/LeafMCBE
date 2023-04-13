import Server from "../../Server";
import Colors from "../../utils/Colors";
import Player from "../../api/Player";
import Protocol from "bedrock-protocol";

const PacketSpawn = (server: Server, client: Protocol.Client) => {
  const player = new Player(client);
  server.broadcast(`[${Colors.green("+")}] ${player.username}`);
};

export default PacketSpawn;
