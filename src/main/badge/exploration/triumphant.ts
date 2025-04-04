import { BadgeData, zoneLink } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Triumphant: BadgeData = {
  type: 'EXPLORATION',
  key: 'triumphant',
  setTitle: { id: 293 },
  name: [{ value: 'Triumphant' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: Warburg.key,
  loc: [228, 274, 33],
  badgeText: [{ value: 'The symbolism is hard to miss: whoever controls the Warburg rockets controls the world. Whether this is pure delusion or an ominous warning is a subject of much debate.' }],
  notes: `The Triumphant Badge is located in ${zoneLink(Warburg)} at the top of the golden globe with the rocket flying around it in the center of the map.`,
  links: [{ title: 'Triumphant Badge', href: 'https://homecoming.wiki/wiki/Triumphant_Badge' }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
