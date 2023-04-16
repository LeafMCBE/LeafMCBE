import Server from "../../Server";
import Colors from "../../utils/Colors";
import Player from "../../api/Player";
import Protocol from "bedrock-protocol";

const PacketSpawn = (server: Server, client: Protocol.Client) => {
  const maybe = () => {
    server.broadcast(`[${Colors.green("+")}] ${player.username}`);
  };
  const player = new Player(client);

  server.plugins.do("onPlayerJoin", maybe, player);
};

export default PacketSpawn;
