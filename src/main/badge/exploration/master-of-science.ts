import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const MasterOfScience: BadgeData = {
  type: 'EXPLORATION',
  key: 'master-of-science',
  setTitle: { id: 1493 },
  name: [{ value: 'Master of Science' }],
  alignment: ['V'],
  zoneKey: CapAuDiable.key,
  loc: [-446, 430, -328],
  badgeText: [{ value: 'Dr. Aeon designed this giant globe of an atom to signify the advances that science has brought to Cap au Diable.' }],
  notes: 'The Master of Science Badge is located on top of the globe in the Aeon City neighborhood of Cap au Diable.',
  links: [
    { title: 'Master of Science Badge', href: 'https://homecoming.wiki/wiki/Master_of_Science_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
