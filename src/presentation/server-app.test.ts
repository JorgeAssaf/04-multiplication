import fs from 'fs'
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case'
import { ServerApp } from './server-app'

describe('ServerApp', () => {
  const options = {
    base: 1,
    limit: 10,
    show: false,
    fileDestination: 'file-test',
    fileName: 'file-test',
  }
  afterEach(() => {
    const fileTestExists = fs.existsSync('file-test/file-test.txt')
    if (fileTestExists) {
      fs.rmSync('file-test/file-test.txt', { recursive: true })
    }
  })
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should create ServerApp instance', () => {
    const serverApp = new ServerApp()
    expect(serverApp).toBeInstanceOf(ServerApp)
    expect(typeof ServerApp.run).toBe('function')
  })

  test('should run with options', () => {
    //   const logSpy = jest.spyOn(console, 'log')
    //   const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute')
    //   const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')
    //   const options = {
    //     base: 1,
    //     limit: 10,
    //     show: false,
    //     fileDestination: 'file-test',
    //     fileName: 'file-test',
    //   }

    //   ServerApp.run(options)

    //   expect(logSpy).toHaveBeenCalledWith('Server is running...')
    //   expect(logSpy).toHaveBeenLastCalledWith('File was saved:', true)

    //   expect(createTableSpy).toHaveBeenCalledTimes(1)

    //   expect(createTableSpy).toHaveBeenCalledWith({
    //     base: options.base,
    //     limit: options.limit,
    //   })
    //   expect(saveFileSpy).toHaveBeenCalledTimes(1)

    //   expect(saveFileSpy).toHaveBeenCalledWith({
    //     fileContent: expect.any(String),
    //     fileDestination: options.fileDestination,
    //     fileName: options.fileName,
    //   })
    const crateMock = vi.fn().mockReturnValue(`1 x 1 = 1\n 1 x 2 = 2\n`)
    const saveMock = vi.fn().mockReturnValue(true)
    const logMock = vi.fn()
    const logerrorMock = vi.fn()

    console.log = logMock
    console.error = logerrorMock
    CreateTable.prototype.execute = crateMock
    SaveFile.prototype.execute = saveMock
    ServerApp.run(options)

    expect(logMock).toHaveBeenCalledWith('Server is running...')
    expect(crateMock).toHaveBeenCalledTimes(1)
    expect(crateMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    })
    expect(saveMock).toHaveBeenCalledTimes(1)
    expect(saveMock).toHaveBeenCalledWith({
      fileContent: `1 x 1 = 1\n 1 x 2 = 2\n`,
      fileDestination: options.fileDestination,
      fileName: options.fileName,
    })
    expect(logMock).toHaveBeenLastCalledWith('File was saved:', true)
    expect(logerrorMock).not.toHaveBeenCalled()
  })
})
