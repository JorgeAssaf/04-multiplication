import yarsg from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yarsg(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Es el limite de la tabla de multiplicar',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'table name',
  })
  .options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'table destination',
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || argv.b < 1) {
      throw 'La base tiene que ser un numero'
    }
    if (isNaN(argv.l)) {
      throw 'El limite tiene que ser un numero'
    }
    return true
  })
  .parseSync()
