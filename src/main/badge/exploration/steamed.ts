import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../map/cap-au-diable'

export const Steamed: BadgeData = {
  type: 'EXPLORATION',
  key: 'steamed',
  setTitle: { id: 272 },
  name: [{ value: 'Steamed' }],
  alignment: ['V'],
  mapKey: CapAuDiable.key,
  loc: [-2426, 224, -472],
  badgeText: [{ value: 'Volcanic activity around Mount Diable causes a lot of steamy venting. Watch out or it\'s lobster time.' }],
  notes: 'The badge marker is 88 feet southeast of the Mount Diable marker. It is located just east of a couple of towers holding up large pipes.',
  links: [
    { title: 'Steamed Badge', href: 'https://homecoming.wiki/wiki/Steamed_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
