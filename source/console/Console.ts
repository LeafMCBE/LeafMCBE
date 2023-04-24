import { createInterface, Interface } from "readline/promises";
import server from "../../start";

class CCS {
  private rl: Interface;

  async start() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stderr,
    });
    const showPrompt = server.config.LeafMCBE.Terminal.showPrompt;

    if (showPrompt) this.rl.setPrompt("> ");

    this.rl.on("line", (i) => {
      const raw = i.split(" ");
      const cmdName = raw[0].replace("/", "");
      const parameters = () => {
        if (raw.length >= 1) {
          return raw.filter((_v, i) => i !== 0);
        } else {
          return [];
        }
      };

      server.commands.requestOnConsole(cmdName, parameters());
      if (showPrompt) this.rl.prompt();
    });

    this.rl.on("close", () => {
      process.exit(0);
    });

    const backup = {
      info: console.info,
      error: console.error,
      warn: console.warn,
    };

    ["info", "error", "warn"].forEach((e) => {
      console[e] = async (text: string) => {
        if (showPrompt) {
          this.rl.setPrompt("");
          this.rl.prompt(false);
        }

        backup[e](text);

        if (showPrompt) {
          this.rl.setPrompt("> ");
          this.rl.prompt();
        }
      };
    });

    if (showPrompt) this.rl.prompt();
  }
}

export default CCS;
