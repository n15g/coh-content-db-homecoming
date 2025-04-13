import { isUri } from 'valid-url'

const SUPPORTED_PROTOCOLS = new Set(['https:', 'badge:', 'contact:', 'mission:', 'zone:'])

export function isValidUrl(input: string): boolean {
  return isUri(input) === input
}

export function isValidProtocol(input: string): boolean {
  try {
    return SUPPORTED_PROTOCOLS.has(new URL(input).protocol)
  } catch {
    return false
  }
}
