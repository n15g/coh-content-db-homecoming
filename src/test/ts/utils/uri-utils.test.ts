import { isValidProtocol, isValidUrl } from '../../../main/ts/utils/uri-utils'

describe('isValidUrl', () => {
  test('should return true for a valid link', () => {
    expect(isValidUrl('https://nouri.com/page')).toBe(true)
  })

  test('should return true for a badge link', () => {
    expect(isValidUrl('badge://badge-key')).toBe(true)
  })

  test('should return false with a space', () => {
    expect(isValidUrl('https://hello world')).toBe(false)
  })

  test('should return true for strings with encoded spaces', () => {
    expect(isValidUrl('https://hello%20world')).toBe(true)
  })

  test('should return true for normal URLs', () => {
    expect(isValidUrl('https://nouri.com/foo?bar=baz')).toBe(true)
  })

  test('should return false for emojis or unicode characters', () => {
    expect(isValidUrl('https://nouri.com/💥')).toBe(false)
  })

  test('should return true for encoded emojis', () => {
    expect(isValidUrl('https://nouri.com/%F0%9F%92%A5')).toBe(true)
  })

  test('should return false for malformed encodings', () => {
    expect(isValidUrl('https://nouri.com/%E0%A4%A')).toBe(false)
  })

  test('should return true for encoded punctuation', () => {
    expect(isValidUrl('https://nouri.com/%3A%2F%2F')).toBe(true)
  })

  test('should return false for not a url', () => {
    expect(isValidUrl('nouri/blah')).toBe(false)
  })

  test('should return false for caret character', () => {
    expect(isValidUrl('https://nouri.com/^')).toBe(false)
  })

  test('should return false for brace character', () => {
    expect(isValidUrl('https://nouri.com/{}')).toBe(false)
  })
})

describe('isValidProtocol', () => {
  test('should return true for https', () => {
    expect(isValidProtocol('https://nouri.com/page')).toBe(true)
  })

  test('should return true for badge', () => {
    expect(isValidProtocol('badge://badge-key')).toBe(true)
  })

  test('should return true for contact', () => {
    expect(isValidProtocol('contact://contact-key')).toBe(true)
  })

  test('should return true for mission', () => {
    expect(isValidProtocol('mission://mission-key')).toBe(true)
  })

  test('should return true for zone', () => {
    expect(isValidProtocol('zone://zone-key')).toBe(true)
  })

  test('should return false for http', () => {
    expect(isValidProtocol('http://badge-key')).toBe(false)
  })

  test('should return false for badge', () => {
    expect(isValidProtocol('unknown://badge-key')).toBe(false)
  })

  test('should return false for not a url', () => {
    expect(isValidProtocol('XXX')).toBe(false)
  })
})
