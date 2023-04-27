import Server from '../../Server'

const AvailableCommands = (server: Server): object => {
  const base = {
    values_len: 0,
    _enum_type: 'byte',
    enum_values: [],
    suffixes: [],
    enums: [],
    command_data: [],
    dynamic_enums: [],
    enum_constraints: []
  }

  server.commands.getAll().forEach(c => {
    base.command_data.push({
      name: c.options.name,
      description: c.options.description || 'No description provided',
      flags: 0,
      permission_level: 0,
      alias: -1,
      overloads: [
        c.options.arguments[0].map(obj => {
          return {
            parameter_name: obj.name,
            value_type: obj.type,
            enum_type: 'valid',
            optional: obj.optional,
            options: {
              unused: 0,
              collapse_enum: 0,
              has_semantic_constraint: 0,
              as_chained_command: 0,
              unknown2: 0
            }
          }
        })
      ]
    })

    if (c.options.aliases && c.options.aliases.length >= 1) {
      c.options.aliases.forEach(name => {
        base.command_data.push({
          name,
          description: c.options.description || 'No description provided',
          flags: 0,
          permission_level: 0,
          alias: -1,
          overloads: [
            c.options.arguments[0].map(obj => {
              return {
                parameter_name: obj.name,
                value_type: obj.type,
                enum_type: 'valid',
                optional: obj.optional,
                options: {
                  unused: 0,
                  collapse_enum: 0,
                  has_semantic_constraint: 0,
                  as_chained_command: 0,
                  unknown2: 0
                }
              }
            })
          ]
        })
      })
    }
  })

  return base
}

export default AvailableCommands
