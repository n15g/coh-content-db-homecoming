import { BadgeData, zoneLink } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const Unspoiled: BadgeData = {
  type: 'exploration',
  key: 'unspoiled',
  setTitleId: [141],
  name: 'Unspoiled',
  morality: 'heroic',
  zoneKey: Eden.key,
  loc: [2482, 34, 2350],
  badgeText: `The beauty that is Eden Falls came at a terrible price.`,
  notes: `Located in ${zoneLink(Eden)} 105 yards south of The Cascades marker.`,
  links: [
    { title: 'Unspoiled Badge', href: 'https://homecoming.wiki/wiki/Unspoiled_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
