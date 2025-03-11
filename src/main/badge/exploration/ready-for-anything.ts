import { BadgeData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const ReadyForAnything: BadgeData = {
  type: 'EXPLORATION',
  key: 'ready-for-anything',
  setTitle: { id: 1746 },
  name: [{ value: 'Ready for Anything' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNeutropolis.key,
  loc: [-1859, -1248, -4112],
  badgeText: [{
    value: 'This training room under Lambda Sector serves as a harsh urban combat \'shoothouse\' for the Imperial Defense Force and PPD TEST.'
      + ' Live fire exercises are also known as \'Resistance assaults.\'',
  }],
  notes: 'Located in [map:underground-neutropolis] in the square at the far north of the map.',
  links: [
    { title: 'Ready for Anything Badge', href: 'https://homecoming.wiki/wiki/Ready_for_Anything_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '6',
}
