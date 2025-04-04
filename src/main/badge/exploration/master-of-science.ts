import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const MasterOfScience: BadgeData = {
  type: 'exploration',
  key: 'master-of-science',
  setTitleId: [1493],
  name: 'Master of Science',
  morality: 'villainous',
  zoneKey: CapAuDiable.key,
  loc: [-446, 430, -328],
  badgeText: 'Dr. Aeon designed this giant globe of an atom to signify the advances that science has brought to Cap au Diable.',
  notes: 'The Master of Science Badge is located on top of the globe in the Aeon City neighborhood of Cap au Diable.',
  links: [
    { title: 'Master of Science Badge', href: 'https://homecoming.wiki/wiki/Master_of_Science_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '7',
}
