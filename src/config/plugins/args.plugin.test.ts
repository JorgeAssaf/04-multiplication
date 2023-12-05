import { beforeEach, describe, expect, test, vi } from 'vitest'

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args]
  const { yarg } = await import('./args.plugin')

  return yarg
}

describe('yargs plugin', () => {
  const originalProcessArgv = process.argv
  beforeEach(() => {
    process.argv = originalProcessArgv
    vi.resetModules()
  })

  test('should return with default options', async () => {
    const argv = await runCommand(['-b', '1'])
    expect(argv).toEqual(
      expect.objectContaining({
        b: 1,
        base: 1,
        l: 10,
        limit: 10,
        s: false,
        show: false,
        n: 'multiplication-table',
        name: 'multiplication-table',
        d: 'outputs',
        destination: 'outputs',
      }),
    )
  })
  test('should return with custom options', async () => {
    const argv = await runCommand([
      '-b',
      '15',
      '-l',
      '20',
      '-s',
      '-n',
      'custom-table-name',
      '-d',
      'custom-outputs/file-destination/',
    ])
    expect(argv).toEqual(
      expect.objectContaining({
        b: 15,
        base: 15,
        l: 20,
        limit: 20,
        s: true,
        show: true,
        n: 'custom-table-name',
        name: 'custom-table-name',
        d: 'custom-outputs/file-destination/',
        destination: 'custom-outputs/file-destination/',
      }),
    )
  })
  // test('should return error if base is not a number', async () => {
  //   const argv = await runCommand(['-b', 'q'])
  //   if (argv instanceof Error) {
  //     expect(argv).toBeInstanceOf(Error)
  //   }
  // })
})
