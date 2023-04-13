import validate from "./server/Validator";
import launch from "./server/Launch";
import Logger from "./console/Logger";
import Player from "./api/Player";

import { parse } from "yaml";
import { readFile } from "fs/promises";
import Protocol from "bedrock-protocol";
import { Text, TextType } from "./packets/Text";
import Colors from "./utils/Colors";
import PacketSpawn from "./packets/handlers/PacketSpawn";
import PacketText from "./packets/handlers/PacketText";
import PacketClose from "./packets/handlers/PacketClose";
import PacketJoin from "./packets/handlers/PacketJoin";

class Server {
  public loggers: { srv: Logger; chat: Logger };
  public config: {
    Server: {
      version: string;
      host: string;
      max_players: number;
      motd: string;
      port: number;
    };
  };
  private srv: Protocol.Server;
  public readonly players: Player[] = [];

  constructor() {
    this.start();
  }

  private async start() {
    await validate();

    this.loggers = {
      srv: new Logger({ name: "Server", showDate: true }),
      chat: new Logger({ name: "Chat", showDate: true }),
    };
    this.config = parse(await readFile("./leaf/config.yml", "utf-8"));
    await this.startSrv();
  }

  private async startSrv() {
    new Promise<void>((res) => {
      const srv = Protocol.createServer({
        host: this.config.Server.host,
        port: this.config.Server.port,
        motd: {
          levelName: "Dedicated LeafMCBE Server",
          motd: String(this.config.Server.motd),
        },
        offline: false,
        maxPlayers: this.config.Server.max_players,
        version: this.config.Server.version,
        advertisementFn() {
          const ad = new Protocol.ServerAdvertisement();

          return ad;
        },
      });
      this.srv = srv;

      launch(this);
      this.handle();
      res();
    });
  }

  private async handle() {
    this.srv.on("connect", (client: Protocol.Client) => {
      client.on("join", () => PacketJoin(this, client));
      client.on("spawn", () => PacketSpawn(this, client));
      client.on("close", () => PacketClose(this, client));

      client.on("packet", (pkt) => {
        if (!client) return;

        this.handlePkt(client, pkt);
      });
    });
  }

  private handlePkt(client: Protocol.Client, packet: any) {
    switch (packet.data.name) {
      case "text":
        PacketText(this, client, packet);
        break;
    }
  }

  broadcast(message: string) {
    this.players.forEach((player) => {
      const text = new Text()
        .setMessage(message)
        .setNeedsTranslation(false)
        .setPlatformChatId("")
        .setSourceName("")
        .setType(TextType.Announcement)
        .setXuid("");

      text.execute(player.client);
    });

    this.loggers.chat.info(Colors.toConsole(message));
  }
}

export default Server;
