import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const Hoarder: BadgeData = {
  type: 'exploration',
  key: 'hoarder',
  setTitleId: [1649],
  name: 'Hoarder',
  morality: 'all',
  badgeText: `The Total Praetorian Network produces mounds of disposable media every minute, so much that there is precious little space to store it in or dispose of it safely.
Beneath their sprawling campus they store leftover propaganda and obsolete entertainment, a treasure trove for the Hoarder such as yourself.`,
  notes: `Located in a small room 225 yds. WNW of City Access B.`,
  links: [
    { title: 'Hoarder Badge', href: 'https://homecoming.wiki/wiki/Hoarder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-1101, 496, -4913] }, vidiotMapKey: '5' },
  ],
}
