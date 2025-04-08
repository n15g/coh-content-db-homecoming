import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const MasterOfScience: BadgeData = {
  type: 'exploration',
  key: 'master-of-science',
  setTitleId: [1493],
  name: 'Master of Science',
  morality: 'rogue-isles-access',
  badgeText: 'Dr. Aeon designed this giant globe of an atom to signify the advances that science has brought to Cap au Diable.',
  notes: 'Located on top of the globe in the Aeon City neighborhood.',
  links: [
    { title: 'Master of Science Badge', href: 'https://homecoming.wiki/wiki/Master_of_Science_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-446, 430, -328] }, vidiotMapKey: '7' },
  ],
}
