import Player from '../Player'
import API from './API'
import Server from '../../Server'
import Logger from '../../console/Logger'

export enum CommandArgumentOptionType {
  Integer = 'int',
  Flat = 'float',
  Value = 'value',
  WildcardInteger = 'wildcard_int',
  WildcardTarget = 'wildcard_target',
  Operator = 'operator',
  CommandOperator = 'command_operator',
  Target = 'target',
  FilePath = 'file_path',
  IntegerRange = 'integer_range',
  Equipment = 'equipment_slots',
  String = 'string',
  BlockPosition = 'block_position',
  Position = 'position',
  Message = 'message',
  RawText = 'raw_text',
  Json = 'json',
  Object = 'json',
  BlockStates = 'block_states',
  Command = 'command'
}

export interface CommandArgumentOptions {
  name: string
  type: CommandArgumentOptionType
  optional?: boolean
}

export interface CommandOptions {
  name: string
  description?: string
  aliases?: string[]
  arguments?: [
    CommandArgumentOptions[],
    {
      min: number
      max: number
    }
  ]
}

export abstract class Command {
  public readonly options: CommandOptions
  public readonly api: {
    getServer: () => Server
    getLogger: () => Logger
  }

  constructor (options: CommandOptions) {
    this.options = options
    this.api = API()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract run(player: Player | null, parameters: any[]): void
}
