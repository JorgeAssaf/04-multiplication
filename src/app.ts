import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app'

(() => {
  main()
})()

function main() {
  const { b: base, l: limit, s: show, d: fileDestination, n: fileName } = yarg

  ServerApp.run({ base, limit, show, fileDestination, fileName })
}
