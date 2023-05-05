// eslint-disable-next-line import/first
import Server from './source/Server'

if (
  typeof process !== 'undefined' &&
  parseInt(process.versions.node.split('.')[0]) < 14
) {
  console.error('Your node version is currently', process.versions.node)
  console.error(
    'Please update it to a version >= 14.x.x from https://nodejs.org/'
  )
  process.exit(1)
}

const srv = new Server()

export default srv
