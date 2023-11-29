import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case'

interface RunOptons {
  base: number
  limit: number
  show: boolean
  fileDestination: string
  fileName: string
}

export class ServerApp {
  static run({ base, limit, show, fileDestination, fileName }: RunOptons) {
    console.log('Server is running...')

    const table = new CreateTable().execute({ base, limit })
    const wasSaved = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    })
    show && console.log(table)
    console.log('File was saved:', wasSaved)
  }
}
