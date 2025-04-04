import { BadgeData, zoneLink } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'
import { SteelCanyon } from '../../zone/steel-canyon'

export const Phalanxer: BadgeData = {
  type: 'exploration',
  key: 'phalanxer',
  setTitleId: [114],
  name: 'Phalanxer',
  morality: 'heroic',
  zoneKey: Boomtown.key,
  loc: [-2002, -16, 5180],
  badgeText: `Before Baumton had its 'accident,' the Freedom Phalanx called this building home.`,
  notes: `Located in The Fuse neighborhood, at the northeast corner of a building just northeast of the ${zoneLink(SteelCanyon)} entrance. The badge is approximately 230 yards from the entrance.`,
  links: [
    { title: 'Phalanxer Badge', href: 'https://homecoming.wiki/wiki/Phalanxer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '1',
}
