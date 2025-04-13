import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const Nailbiter: BadgeData = {
  type: 'exploration',
  key: 'nailbiter',
  setTitleId: [1747],
  name: 'Nailbiter',
  morality: 'all',
  badgeText: `This PPD interrogation and holding area is littered with the signs of harsh treatment.
Dried bodily fluids, ripped off fingernails, and a few human teeth mark this area as a place you don't want to wind up in.`,
  notes: `Located 415 yards south of City Access C.`,
  links: [
    { title: 'Nailbiter Badge', href: 'https://homecoming.wiki/wiki/Nailbiter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [238, -1216, -2189], icon: 'badge', iconText: '7' } },
  ],
}
