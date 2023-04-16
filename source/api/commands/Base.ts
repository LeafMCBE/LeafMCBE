import Player from "../Player";
import API from "./API";
import Server from "../../Server";
import Logger from "../../console/Logger";

export interface CommandArgumentOptions {
  name: string;
  type:
    | "int"
    | "float"
    | "value"
    | "wildcard_int"
    | "wildcard_target"
    | "operator"
    | "command_operator"
    | "target"
    | "file_path"
    | "integer_range"
    | "equipment_slots"
    | "string"
    | "block_position"
    | "position"
    | "message"
    | "raw_text"
    | "json"
    | "block_states"
    | "command";
  optional?: boolean;
}

export interface CommandOptions {
  name: string;
  description?: string;
  aliases?: string[];
  arguments?: [
    CommandArgumentOptions[],
    {
      min: number;
      max: number;
    }
  ];
}

export abstract class Command {
  public readonly options: CommandOptions;
  public readonly api: {
    getServer: () => Server;
    getLogger: () => Logger;
  };

  constructor(options: CommandOptions) {
    this.options = options;
    this.api = API();
  }

  abstract run(player: Player | null, parameters: any[]): void;
}
