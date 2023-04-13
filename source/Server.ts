import validate from "./server/Validator";
import launch from "./server/Launch";
import Logger from "./console/Logger";
import Player from "./api/Player";

import { parse } from "yaml";
import { readFile } from "fs/promises";
import Protocol from "bedrock-protocol";
import { Text, TextType } from "./packets/Text";
import Colors from "./utils/Colors";
import Form from "./packets/Form";

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
          return new Protocol.ServerAdvertisement();
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
      client.on("join", () => {
        if (!client) return;

        const player = new Player(client);
        this.players.push(player);
        this.loggers.srv.info(`${player.username}[${player.ip}] connected`);

        client.write("resource_packs_info", {
          must_accept: false,
          has_scripts: false,
          behaviour_packs: [],
          texture_packs: [],
        });

        // ResourcePackStack is sent by the server to send the order in which resource packs and behaviour packs
        // should be applied (and downloaded) by the client.
        client.write("resource_pack_stack", {
          must_accept: false,
          behavior_packs: [],
          resource_packs: [],
          game_version: "",
          experiments: [],
          experiments_previously_used: false,
        });

        client.once("resource_pack_client_response", async (rp) => {
          const get = async (text: string) => {
            return JSON.parse(
              await readFile(`./network/packets/${text}.json`, "utf-8")
            );
          };

          const Item = require("bedrock-protocol/types/Item")("1.18.0");
          for (let i = 0; i < 3; i++) {
            client.queue("inventory_slot", {
              window_id: 120,
              slot: 0,
              item: new Item().toBedrock(),
            });
          }

          client.queue("player_list", {
            records: {
              type: 0,
              records_count: 0,
              records: [],
              verified: [],
            },
          });
          client.queue("start_game", await get("start_game"));
          client.queue("item_component", { entries: [] });
          client.queue("set_spawn_position", await get("set_spawn_position"));
          client.queue("set_time", { time: 5433771 });
          client.queue("set_difficulty", { difficulty: 1 });
          client.queue("set_commands_enabled", { enabled: true });
          client.queue(
            "biome_definition_list",
            await get("biome_definition_list")
          );
          client.queue(
            "available_entity_identifiers",
            await get("available_entity_identifiers")
          );
          client.queue("update_attributes", await get("update_attributes"));
          client.queue("creative_content", await get("creative_content"));
          client.queue("inventory_content", {
            window_id: "offhand",
            input: [
              {
                network_id: 0,
              },
            ],
          });
          client.queue("player_hotbar", {
            selected_slot: 3,
            window_id: "inventory",
            select_slot: true,
          });
          client.queue("crafting_data", await get("crafting_data"));
          client.queue("available_commands", await get("available_commands"));
          client.queue("chunk_radius_update", { chunk_radius: 1 });
          client.queue("game_rules_changed", await get("game_rules_changed"));
          client.queue("respawn", await get("respawn"));

          setTimeout(() => {
            client.write("play_status", { status: "player_spawn" });
          }, 6000);
        });
      });

      client.on("spawn", () => {
        if (!client) return;

        const player = new Player(client);
        this.broadcast(`[${Colors.green("+")}] ${player.username}`);

        new Form()
          .setTitle("Hello")
          .setId(1)
          .addButton({ text: "Confirm" })
          .addButton({ text: "Deny" })
          .addInput("Input", "Write my son's a failure")
          .addLabel("This is a useless label")
          .addToggle("Stupid?")
          .addSlider("Rate your stupidity 0-100", 0, 100, 1)
          .execute(player.client);
      });

      client.on("close", () => {
        if(!client) return;

        const player = new Player(client);
        this.broadcast(`[${Colors.red("-")}] ${player.username}`);

        delete this.players[
          this.players.findIndex((v) => v.username === player.username)
        ];
      });
    });
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
