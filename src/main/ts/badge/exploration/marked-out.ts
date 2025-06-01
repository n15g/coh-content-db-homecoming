import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-warf'

export const MarkedOut: BadgeData = {
  type: 'exploration',
  key: 'marked-out',
  setTitleId: [2454],
  name: 'Marked Out',
  releaseDate: '2025-06-??',
  morality: 'all',
  badgeText: `This site commemorates the final protest held against developer-tycoon Mark Maxwell's aggressive demolitions of the theatres in the Row. The last theatre, named The Redwood, stood here and shielded more than 500 protestors in its final days.`,
  notes: ` ??? `,
  links: [
    { title: 'Marked Out Badge', href: 'https://homecoming.wiki/wiki/Marked_Out_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [1891.5, 41.8, 971.7], icon: 'badge', iconText: 'x' } },
  ],
}
