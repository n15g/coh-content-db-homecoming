import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const Sparky: BadgeData = {
  type: 'exploration',
  key: 'sparky',
  setTitleId: [269],
  name: 'Sparky',
  morality: 'villainous',
  zoneKey: CapAuDiable.key,
  loc: [-2432, 294, -1248],
  badgeText: 'You\'ve spent time wandering around in the Power Transport System at Mount Diable.',
  notes: 'The Sparky Badge is in the Power Transport System station in Mount Diable in Cap au Diable.'
    + ' There is a building with two large electrical quad-towers on it.'
    + ' The badge marker is on top of the building right in the middle of those two towers.',
  links: [
    { title: 'Sparky Badge', href: 'https://homecoming.wiki/wiki/Sparky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
