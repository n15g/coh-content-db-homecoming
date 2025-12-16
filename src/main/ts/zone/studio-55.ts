import { ZoneData, zoneLink } from 'coh-content-db'
import { PocketD } from './pocket-d'

export const Studio55: ZoneData = {
  key: 'studio-55',
  name: 'Studio 55',
  type: 'building',
  morality: 'all',
  levelRange: 1,
  notes: `Acts as the Praetorian Earth's connection to the ${zoneLink(PocketD)} zone.`,
  links: [{ title: 'Studio 55', href: 'https://homecoming.wiki/wiki/Studio_55' }],
}
