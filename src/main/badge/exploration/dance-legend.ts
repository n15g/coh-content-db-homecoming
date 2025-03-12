import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../map/steel-canyon'

export const DanceLegend: BadgeData = {
  type: 'EXPLORATION',
  key: 'dance-legend',
  setTitle: { id: 1530 },
  name: [{ value: 'Dance Legend' }],
  alignment: ['H'],
  mapKey: SteelCanyon.key,
  loc: [-4316, -100, 1783],
  badgeText: [{
    value: 'Paragon Dance Party was a popular place for local heroes to go relax and have a good time.'
      + ' However, it was almost instantly closed when entrances to Pocket D were opened up by the owner of the Dance Party, DJ Zero, who was merely using the location as a test bed to see if'
      + ' his pet project, Pocket D, would be a success.',
  }],
  notes: 'The Dance Legend Badge is at the back entrance of the building 170 yards northwest of the south Paragon City Monorail station.',
  links: [
    { title: 'Dance Legend Badge', href: 'https://homecoming.wiki/wiki/Dance_Legend_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
