import { describe, expect, test, vi } from 'vitest'
import { ServerApp } from './presentation/server-app'

describe('App', () => {
  test('should render successfully', async () => {
    const serverAppMock = vi.fn()
    ServerApp.run = serverAppMock

    process.argv = [
      'node',
      'app.ts',
      '-b',
      '1',
      '-l',
      '10',
      '-s',
      '-n',
      'table',
      '-f',
      'outputs',
    ]

    await import('./app')

    expect(serverAppMock).toHaveBeenCalledWith({
      base: 1,
      limit: 10,
      show: true,
      fileDestination: 'outputs',
      fileName: 'table',
    })
  })
})
