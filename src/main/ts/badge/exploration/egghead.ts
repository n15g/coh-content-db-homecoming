import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const Egghead: BadgeData = {
  type: 'exploration',
  key: 'egghead',
  setTitleId: [271],
  name: 'Egghead',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `It's back to school for you. Aeon University is home to many of Dr. Aeon's Brighter employees.`,
  notes: 'Located on top of the university right above the front door.',
  links: [
    { title: 'Egghead Badge', href: 'https://homecoming.wiki/wiki/Egghead_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [941, 98, -1441], icon: 'badge', iconText: '3' } },
  ],
}
