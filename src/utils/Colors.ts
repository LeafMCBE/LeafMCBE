import chalk from "chalk";

const Colors = {
  red(text: string, console?: boolean) {
    if (console) return chalk.redBright(text);
    else return `§c${text}`;
  },

  darkRed(text: string, console?: boolean) {
    if (console) return chalk.red(text);
    else return `§4${text}`;
  },

  green(text: string, console?: boolean) {
    if (console) return chalk.greenBright(text);
    else return `§a${text}`;
  },

  darkGreen(text: string, console?: boolean) {
    if (console) return chalk.green(text);
    else return `§2${text}`;
  },

  blue(text: string, console?: boolean) {
    if (console) return chalk.blueBright(text);
    else return `§9${text}`;
  },

  darkBlue(text: string, console?: boolean) {
    if (console) return chalk.blue(text);
    else return `§1${text}`;
  },

  yellow(text: string, console?: boolean) {
    if (console) return chalk.yellowBright(text);
    else return `§e${text}`;
  },

  darkYellow(text: string, console?: boolean) {
    if (console) return chalk.yellow(text);
    else return `§6${text}`;
  },

  aqua(text: string, console?: boolean) {
    if (console) return chalk.cyanBright(text);
    else return `§b${text}`;
  },

  darkAqua(text: string, console?: boolean) {
    if (console) return chalk.cyan(text);
    else return `§3${text}`;
  },

  purple(text: string, console?: boolean) {
    if (console) return chalk.magentaBright(text);
    else return `§d${text}`;
  },

  darkPurple(text: string, console?: boolean) {
    if (console) return chalk.magenta(text);
    else return `§5${text}`;
  },

  gray(text: string, console?: boolean) {
    if (console) return chalk.gray(text);
    else return `§7${text}`;
  },

  black(text: string, console?: boolean) {
    if (console) return chalk.blackBright(text);
    else return `§0${text}`;
  },

  white(text: string, console?: boolean) {
    if (console) return chalk.whiteBright(text);
    else return `§f${text}`;
  },

  toConsole(text: string) {
    const ar = text.split(" ");

    ar.forEach((text, index) => {
      colors.forEach((c) => {
        if (text.startsWith(c.mc)) ar[index] = c.method(text.substring(2));
      });
    });

    return `${ar.join(" ")}\x1b[0m`;
  },
};

const colors = [
  { mc: "§0", method: (t: string) => `\x1b[30m${t}` },
  { mc: "§1", method: (t: string) => `\x1b[34m${t}` },
  { mc: "§2", method: (t: string) => `\x1b[32m${t}` },
  { mc: "§3", method: (t: string) => `\x1b[36m${t}` },
  { mc: "§4", method: (t: string) => `\x1b[31m${t}` },
  { mc: "§5", method: (t: string) => `\x1b[35m${t}` },
  { mc: "§6", method: (t: string) => `\x1b[33m${t}` },
  { mc: "§7", method: (t: string) => `\x1b[37m${t}` },
  { mc: "§8", method: (t: string) => `\x1b[90m${t}` },
  { mc: "§9", method: (t: string) => `\x1b[94m${t}` },
  { mc: "§a", method: (t: string) => `\x1b[92m${t}` },
  { mc: "§b", method: (t: string) => `\x1b[96m${t}` },
  { mc: "§c", method: (t: string) => `\x1b[91m${t}` },
  { mc: "§d", method: (t: string) => `\x1b[95m${t}` },
  { mc: "§e", method: (t: string) => `\x1b[93m${t}` },
  { mc: "§f", method: (t: string) => `\x1b[97m${t}` },
];

export default Colors;
