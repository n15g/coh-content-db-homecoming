import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const Nailbiter: BadgeData = {
  type: 'EXPLORATION',
  key: 'nailbiter',
  setTitle: { id: 1747 },
  name: [{ value: 'Nailbiter' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [238, -1216, -2189],
  badgeText: [{
    value: 'This PPD interrogation and holding area is littered with the signs of harsh treatment.'
      + ' Dried bodily fluids, ripped off fingernails, and a few human teeth mark this area as a place you don\'t want to wind up in.',
  }],
  notes: `Located in ${mapLink(UndergroundNeutropolis)} 415 yards south of City Access C.`,
  links: [
    { title: 'Nailbiter Badge', href: 'https://homecoming.wiki/wiki/Nailbiter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
