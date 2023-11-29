import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {
  const customOption = {
    fileDestination: 'custom/destination',
    fileName: 'table-custom',
    fileContent: 'custom file content',
  }
  const customFilePath = `${customOption.fileDestination}/${customOption.fileName}.txt`

  afterEach(() => {
    const outputFolderExists = fs.existsSync('outputs')
    if (outputFolderExists) fs.rmSync('outputs', { recursive: true })

    const outputCustomFolderExists = fs.existsSync(
      customOption.fileDestination,
    )
    if (outputCustomFolderExists) fs.rmSync(customOption.fileDestination, { recursive: true })
  })

  test('should save file with default options', () => {
    const saveFile = new SaveFile()
    const options = {
      fileContent: 'file content',
    }
    const file = saveFile.execute(options)
    expect(file).toBeTruthy()

    const filePath = 'outputs/table.txt'

    const fileExists = fs.existsSync(filePath)

    expect(fileExists).toBeTruthy()
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    expect(fileContent).toBe(options.fileContent)
  })

  test('should save file with custom options', () => {
    const saveFile = new SaveFile()

    const file = saveFile.execute(customOption)
    const fileExists = fs.existsSync(customFilePath)
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' })

    expect(file).toBeTruthy()

    expect(fileExists).toBeTruthy()

    expect(fileContent).toBe(customOption.fileContent)
  })
})
