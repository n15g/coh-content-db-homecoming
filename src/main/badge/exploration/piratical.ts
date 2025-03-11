import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'

export const Piratical: BadgeData = {
  type: 'EXPLORATION',
  key: 'piratical',
  setTitle: { id: 262 },
  name: [{ value: 'Piratical' }],
  alignment: ['H', 'V', 'P'],
  mapKey: SirensCall.key,
  loc: [-1631, -144, -866.5],
  badgeText: [{ value: 'The dread pirate Randall set up this lighthouse to lure ships to their demise.' }],
  notes: 'The Piratical Badge marker is located in a grassy area close the water on the villain base island south of the base in [map:${SirensCall.key}].',
  links: [{ title: 'Piratical Badge', href: 'https://homecoming.wiki/wiki/Piratical_Badge' }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
