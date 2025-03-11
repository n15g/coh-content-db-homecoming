import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../map/cap-au-diable'

export const MediaJunky: BadgeData = {
  type: 'EXPLORATION',
  key: 'media-junky',
  setTitle: { id: 270 },
  name: [{ value: 'Media Junky' }],
  alignment: ['V'],
  mapKey: CapAuDiable.key,
  loc: [-894, 248, -1458],
  badgeText: [{ value: 'The top of the WSPDR building is a great place to survey Recluse\'s media empire.' }],
  notes: 'If you travel east from the New Haven marker, you will see the large WSPDR tower on the right.'
    + ' The badge marker is on top of the tower right next to the eastern antenna.',
  links: [
    { title: 'Media Junky Badge', href: 'https://homecoming.wiki/wiki/Media_Junky_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
