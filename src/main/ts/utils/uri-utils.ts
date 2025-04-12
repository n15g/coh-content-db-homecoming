import { isUri } from 'valid-url'

const SUPPORTED_PROTOCOLS = new Set(['https:', 'badge:', 'contact:', 'mission:', 'zone:'])

export function isValidUrl(input: string): boolean {
  return isUri(input) === input
}

export function isValidProtocol(input: string): boolean {
  return SUPPORTED_PROTOCOLS.has(new URL(input).protocol)
}
