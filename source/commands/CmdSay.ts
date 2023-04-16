import Player from "../api/Player";
import { Command } from "../api/commands/Base";
import Colors from "../utils/Colors";

class CommandSay extends Command {
  constructor() {
    super({
      name: "say",
      description: "Broadcast/Say a message",
      aliases: ["broadcast"],
      arguments: [
        [
          {
            name: "message",
            type: "string",
            optional: false,
          },
        ],
        {
          min: 1,
          max: -1,
        },
      ],
    });
  }

  run(player: Player | null, parameters: string[]): void {
    const message = parameters.join(" ");

    this.api.getServer().broadcast(Colors.yellow(`[Server] ${message}`));
  }
}

export default CommandSay;
