import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../zone/underground-neutropolis'

export const BingeEater: BadgeData = {
  type: 'exploration',
  key: 'binge-eater',
  setTitleId: [1741],
  name: 'Binge Eater',
  morality: 'all',
  badgeText: `This hospital sub-basement used to be a primary morgue, but was phased out due to the sheer number of Ghoul attacks it drew. As the Resistance say, nothing a chomper likes more than a well-stocked buffet.`,
  notes: `Located in the green segment of the NW corner of the map, 99 yards East of City Access C.`,
  links: [
    { title: 'Binge Eater Badge', href: 'https://homecoming.wiki/wiki/Binge_Eater_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNeutropolis.key, coords: [-82, -1024, -3495] }, vidiotMapKey: '1' },
  ],
}
