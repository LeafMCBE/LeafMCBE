import validate from "./server/Validator.js";
import launch from "./server/Launch.js";
import Logger from "./console/Logger.js";
import Player from "./api/Player.js";

import { parse } from "yaml";
import { readFile } from "fs/promises";
import {
  createServer,
  ServerAdvertisement,
  Server as Srv,
  Client,
} from "bedrock-protocol";

class Server {
  public loggers: { srv: Logger };
  public config: {
    Server: {
      version: string;
      host: string;
      max_players: number;
      motd: string;
      port: number;
    };
  };
  private srv: Srv;
  

  constructor() {
    this.start();
  }

  private async start() {
    await validate();

    this.loggers = {
      srv: new Logger({ name: "Server", showDate: true }),
    };
    this.config = parse(await readFile("./leaf/config.yml", "utf-8"));
    await this.startSrv();
  }

  private async startSrv() {
    new Promise<void>((res) => {
      const srv = createServer({
        host: this.config.Server.host,
        port: this.config.Server.port,
        motd: {
          levelName: "Dedicated LeafMCBE Server",
          motd: String(this.config.Server.motd),
        },
        offline: false,
        maxPlayers: this.config.Server.max_players,
        advertisementFn() {
          return new ServerAdvertisement();
        },
      });
      this.srv = srv;

      launch(this);
      this.handle();
      res();
    });
  }

  private async handle() {
    this.srv.on("connect", (client: Client) => {
      client.on("join", () => {
        const player = new Player(client);
        this.loggers.srv.info(`${player.username}[${player.ip}] connected`);

        client.write("resource_packs_info", {
          must_accept: false,
          has_scripts: false,
          behaviour_packs: [],
          texture_packs: [],
        });

        client.write("resource_pack_stack", {
          must_accept: false,
          behavior_packs: [],
          resource_packs: [],
          game_version: "",
          experiments: [],
          experiments_previously_used: false,
        });
      });
    });
  }
}

export default Server;
