import Server from '../Server.js'
import chalk from 'chalk'
import figlet from 'figlet'

const launch = async (srv: Server) => {
  const text = await figlet.textSync('LeafMCBE', {
    font: 'Big',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    width: 80,
    whitespaceBreak: true
  })

  console.log(text)
  console.info(
    `Starting LeafMCBE on Minecraft Bedrock ${chalk.bold(
      srv.config.Server.version
    )}`,
    'Server'
  )
}

export default launch
