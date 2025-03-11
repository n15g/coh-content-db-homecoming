import * as index from '../main/index'

test('should export the main db', () => {
  expect(index).toHaveProperty('HOMECOMING')
})
