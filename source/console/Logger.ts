import chalk from "chalk";

interface LoggerOptions {
  debug?: boolean;
  showDate?: boolean;
  name: string;
}

type LoggerLevel = "info" | "warn" | "error" | "debug";

class Logger {
  private readonly options: LoggerOptions;

  constructor(options: LoggerOptions) {
    this.options = options;
  }

  public info(text: string) {
    this.write(text, "info");
  }

  public warn(text: string) {
    this.write(text, "warn");
  }

  public error(text: string) {
    this.write(text, "error");
  }

  public debug(text: string) {
    if (this.options.debug) this.write(text, "debug");
  }

  private write(text: string, lvl: LoggerLevel) {
    const date = new Date().toLocaleString().replace(",", "").toUpperCase();
    const level = this.level(lvl);
    const msg = this.options.showDate
      ? `[${date} ${level}] [${this.options.name}] ${text}`
      : `[${level}] [${this.options.name}] ${text}`;

    console[lvl](msg);
  }

  private level(lvl: LoggerLevel) {
    switch (lvl) {
      case "info":
        return chalk.blue("INFO");
      case "warn":
        return chalk.yellow("WARN");
      case "error":
        return chalk.red("ERROR");
      case "debug":
        return "DEBUG";
    }
  }
}

export default Logger;
