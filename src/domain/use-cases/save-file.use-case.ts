import fs from 'fs'

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean
}

export interface SaveFileOptions {
  fileName?: string
  fileDestination?: string
  fileContent: string
}

export class SaveFile implements SaveFileUseCase {
  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table',
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true })
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
