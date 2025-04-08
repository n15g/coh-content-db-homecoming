import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const Steamed: BadgeData = {
  type: 'exploration',
  key: 'steamed',
  setTitleId: [272],
  name: 'Steamed',
  morality: 'rogue-isles-access',
  badgeText: `Volcanic activity around Mount Diable causes a lot of steamy venting. Watch out or it's lobster time.`,
  notes: 'Located 88 feet southeast of the Mount Diable marker, just east of a couple of towers holding up large pipes.',
  links: [
    { title: 'Steamed Badge', href: 'https://homecoming.wiki/wiki/Steamed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-2426, 224, -472] }, vidiotMapKey: '4' },
  ],
}
