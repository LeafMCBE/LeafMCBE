import chalk from 'chalk'

const Colors = {
  red (text: string, console?: boolean) {
    if (console) return chalk.redBright(text)
    else return `§c${text}§r`
  },

  darkRed (text: string, console?: boolean) {
    if (console) return chalk.red(text)
    else return `§4${text}§r`
  },

  green (text: string, console?: boolean) {
    if (console) return chalk.greenBright(text)
    else return `§a${text}§r`
  },

  darkGreen (text: string, console?: boolean) {
    if (console) return chalk.green(text)
    else return `§2${text}§r`
  },

  blue (text: string, console?: boolean) {
    if (console) return chalk.blueBright(text)
    else return `§9${text}§r`
  },

  darkBlue (text: string, console?: boolean) {
    if (console) return chalk.blue(text)
    else return `§1${text}§r`
  },

  yellow (text: string, console?: boolean) {
    if (console) return chalk.yellowBright(text)
    else return `§e${text}§r`
  },

  darkYellow (text: string, console?: boolean) {
    if (console) return chalk.yellow(text)
    else return `§6${text}§r`
  },

  aqua (text: string, console?: boolean) {
    if (console) return chalk.cyanBright(text)
    else return `§b${text}§r`
  },

  darkAqua (text: string, console?: boolean) {
    if (console) return chalk.cyan(text)
    else return `§3${text}§r`
  },

  purple (text: string, console?: boolean) {
    if (console) return chalk.magentaBright(text)
    else return `§d${text}§r`
  },

  darkPurple (text: string, console?: boolean) {
    if (console) return chalk.magenta(text)
    else return `§5${text}§r`
  },

  gray (text: string, console?: boolean) {
    if (console) return chalk.gray(text)
    else return `§7${text}§r`
  },

  black (text: string, console?: boolean) {
    if (console) return chalk.blackBright(text)
    else return `§0${text}§r`
  },

  white (text: string, console?: boolean) {
    if (console) return chalk.whiteBright(text)
    else return `§f${text}§r`
  },

  bold (text: string, console?: boolean) {
    if (console) return chalk.bold(text)
    else return `§l${text}§r`
  },

  italic (text: string, console?: boolean) {
    if (console) return chalk.italic(text)
    else return `§o${text}§r`
  },

  toConsole (text: string): string {
    colors.forEach(color => {
      text = text.replace(new RegExp(color.mc, 'g'), color.console)
    })

    return text
  },

  toMinecraft (text: string): string {
    colors.forEach(color => {
      text = text.replace(new RegExp(color.console, 'g'), color.mc)
    })

    return text
  }
}

const colors = [
  { mc: '§0', console: '\x1b[30m' },
  { mc: '§1', console: '\x1b[34m' },
  { mc: '§2', console: '\x1b[32m' },
  { mc: '§3', console: '\x1b[36m' },
  { mc: '§4', console: '\x1b[31m' },
  { mc: '§5', console: '\x1b[35m' },
  { mc: '§6', console: '\x1b[33m' },
  { mc: '§7', console: '\x1b[37m' },
  { mc: '§8', console: '\x1b[90m' },
  { mc: '§9', console: '\x1b[94m' },
  { mc: '§a', console: '\x1b[92m' },
  { mc: '§b', console: '\x1b[96m' },
  { mc: '§c', console: '\x1b[91m' },
  { mc: '§d', console: '\x1b[95m' },
  { mc: '§e', console: '\x1b[93m' },
  { mc: '§f', console: '\x1b[97m' },
  { mc: '§l', console: '\x1b[1m' },
  { mc: '§0', console: '\x1b[3m' },
  { mc: '§r', console: '\x1b[0m' }
]

export default Colors
