type Commands = {
  'commands.default': boolean
  'commands.op': boolean
} & any

interface Permissions {
  '[]': Commands
  [key: string]: Commands
}

export default Permissions
