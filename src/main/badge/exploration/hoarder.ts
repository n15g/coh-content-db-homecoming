import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundImperial } from '../../map/underground-imperial'

export const Hoarder: BadgeData = {
  type: 'EXPLORATION',
  key: 'hoarder',
  setTitle: { id: 1649 },
  name: [{ value: 'Hoarder' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundImperial.key,
  loc: [-1101, 496, -4913],
  badgeText: [{
    value: 'The Total Praetorian Network produces mounds of disposable media every minute, so much that there is precious little space to store it in or dispose of it safely.'
      + ' Beneath their sprawling campus they store leftover propaganda and obsolete entertainment, a treasure trove for the Hoarder such as yourself.',
  }],
  notes: `Located in ${mapLink(UndergroundImperial)} in a small room 225 yds. WNW of City Access B.`,
  links: [
    { title: 'Hoarder Badge', href: 'https://homecoming.wiki/wiki/Hoarder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
