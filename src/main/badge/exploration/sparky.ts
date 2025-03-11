import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../map/cap-au-diable'

export const Sparky: BadgeData = {
  type: 'EXPLORATION',
  key: 'sparky',
  setTitle: { id: 269 },
  name: [{ value: 'Sparky' }],
  alignment: ['V'],
  mapKey: CapAuDiable.key,
  loc: [-2432, 294, -1248],
  badgeText: [{ value: 'You\'ve spent time wandering around in the Power Transport System at Mount Diable.' }],
  notes: 'The Sparky Badge is in the Power Transport System station in Mount Diable in Cap au Diable.'
    + ' There is a building with two large electrical quad-towers on it.'
    + ' The badge marker is on top of the building right in the middle of those two towers.',
  links: [
    { title: 'Sparky Badge', href: 'https://homecoming.wiki/wiki/Sparky_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
