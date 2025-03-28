import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const SweetTooth: BadgeData = {
  type: 'EXPLORATION',
  key: 'sweet-tooth',
  setTitle: { id: 273 },
  name: [{ value: 'Sweet Tooth' }],
  alignment: ['V'],
  zoneKey: CapAuDiable.key,
  loc: [-222, 0, -2136],
  badgeText: [{
    value: 'Lawrence Langston made his money investing in the things he personally was interested in.'
      + ' His penchant for chocolate helped him to strike gold with Gold Brick candy bars.',
  }],
  notes: 'The Sweet Tooth Badge is in Cap au Diable. The badge marker is just outside a door in the Gold Brick factory just north of the New Haven marker.'
    + ' The badge marker is at the northwestern corner of the building, between a garage door and a truck with a yellow cab.',
  links: [
    { title: 'Sweet Tooth Badge', href: 'https://homecoming.wiki/wiki/Sweet_Tooth_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
