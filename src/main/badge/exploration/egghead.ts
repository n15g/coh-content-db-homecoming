import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../map/cap-au-diable'

export const Egghead: BadgeData = {
  type: 'EXPLORATION',
  key: 'egghead',
  setTitle: { id: 271 },
  name: [{ value: 'Egghead' }],
  alignment: ['V'],
  mapKey: CapAuDiable.key,
  loc: [941, 98, -1441],
  badgeText: [{ value: 'It\'s back to school for you. Aeon University is home to many of Dr. Aeon\'s Brighter employees.' }],
  notes: 'The Egghead Badge is in Cap au Diable on top of the university right above the front door. The university is located along the western edge of New Haven.',
  links: [
    { title: 'Egghead Badge', href: 'https://homecoming.wiki/wiki/Egghead_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
