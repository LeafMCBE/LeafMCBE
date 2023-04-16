import { Client } from "bedrock-protocol";
import Server from "../../Server";

const PacketCmdReq = (server: Server, client: Client, packet: any) => {
  var raw: string = packet.data.params.command;
  var _ = raw.split(" ");
  var cmdName = _[0].replace("/", "");
  var __ = () => {
    if (_.length >= 1) {
      return _.filter((_v, i) => i !== 0);
    } else {
      return [];
    }
  };
  var args =
    __()
      .join(" ")
      .match(/(?:[^\s"]+|"[^"]*")+/g) || [];

  server.commands.requestOnMinecraft(client, cmdName, args);
};

export default PacketCmdReq;
