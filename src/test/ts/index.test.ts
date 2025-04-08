import * as index from '../../main/ts/index'

test('should export the main db', () => {
  expect(index).toHaveProperty('HOMECOMING')
})
