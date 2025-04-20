import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const SweetTooth: BadgeData = {
  type: 'exploration',
  key: 'sweet-tooth',
  setTitleId: [273],
  name: 'Sweet Tooth',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Lawrence Langston made his money investing in the things he personally was interested in.
His penchant for chocolate helped him to strike gold with Gold Brick candy bars.`,
  notes: `Located just outside a door in the Gold Brick factory just north of the New Haven marker.

The badge marker is at the northwestern corner of the building, between a garage door and a truck with a yellow cab.`,
  links: [
    { title: 'Sweet Tooth Badge', href: 'https://homecoming.wiki/wiki/Sweet_Tooth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-222, 0, -2136], icon: 'badge', iconText: '5' } },
  ],
}
