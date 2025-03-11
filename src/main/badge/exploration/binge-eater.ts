import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const BingeEater: BadgeData = {
  type: 'EXPLORATION',
  key: 'binge-eater',
  setTitle: { id: 1741 },
  name: [{ value: 'Binge Eater' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [-82, -1024, -3495],
  badgeText: [{
    value: 'This hospital sub-basement used to be a primary morgue, but was phased out due to the sheer number of Ghoul attacks it drew.'
      + ' As the Resistance say, nothing a chomper likes more than a well-stocked buffet.',
  }],
  notes: 'Located in [map:underground-neutropolis] in the green segment in the NW corner of the map, 99 yards East of City Access C.',
  links: [
    { title: 'Binge Eater Badge', href: 'https://homecoming.wiki/wiki/Binge_Eater_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
