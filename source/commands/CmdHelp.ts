import Player from "../api/Player";
import { Command, CommandArgumentOptionType } from "../api/commands/Base";
import Colors from "../utils/Colors";

class CommandHelp extends Command {
  constructor() {
    super({
      name: "help",
      description: "Shows this message",
      aliases: ["?"],
      arguments: [
        [
          {
            name: "cmdName",
            type: CommandArgumentOptionType.Command,
            optional: false,
          },
        ],
        {
          min: 0,
          max: 1,
        },
      ],
    });
  }

  run(player: Player | null, parameters: string[]): void {
    const cmds = this.api.getServer().commands.getAll();

    if (parameters.length != 1) {
      const messages = [
        Colors.darkGreen(`Showing ${cmds.length} commands available`),
      ];

      for (const cmd of cmds) {
        const usage = (): string => {
          function usage() {
            if (cmd.options.arguments[0].length >= 1) {
              const aliases = [];
              cmd.options.arguments[0].forEach((c) => {
                if (c.optional) aliases.push(`[${c.name}: ${c.type}]`);
                else aliases.push(`<${c.name}: ${c.type}>`);
              });

              return aliases;
            } else return [];
          }

          if (cmd.options.aliases?.length >= 1) {
            return `[${cmd.options.name}|${cmd.options.aliases.join(
              "|"
            )}] ${usage()} - ${
              cmd.options.description || "No description provided"
            }`;
          } else {
            return `${cmd.options.name} ${usage()} - ${
              cmd.options.description || "No description"
            }`;
          }
        };

        messages.push(`- ${usage()}`);
      }

      messages.push(
        Colors.darkGreen(
          `Tip: Use the <tab> key while typing a command to auto-complete the command of the arguments`
        )
      );

      if (!player)
        messages.forEach((m) => {
          this.api.getLogger().info(Colors.toConsole(m));
        });
      else
        messages.forEach((m) => {
          player.send(m);
        });
    } else {
      // TODO: Implement this.
    }
  }
}

export default CommandHelp;
