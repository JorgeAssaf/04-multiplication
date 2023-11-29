import {CreateTable} from './create-table.use-case'

describe('CreateTableUseCase', () => {
  test('should createTable with default limit', () => {
    const createTable = new CreateTable()
    const table = new CreateTable().execute({base: 2})
    const rows = table.split('\n')

    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table).toContain('2 x 1 = 2')
    expect(table).toContain('2 x 10 = 20')
    expect(rows.length).toBe(10)
  })

  test('should createTable with custom limit', () => {
    const options = {base: 5, limit: 5}
    const createTable = new CreateTable()
    const table = new CreateTable().execute(options)
    const rows = table.split('\n')

    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table).toContain('5 x 1 = 5')
    expect(table).toContain('5 x 5 = 25')
    expect(rows.length).toBe(options.limit)
  })
})
