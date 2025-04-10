import { BadgeData } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const Unspoiled: BadgeData = {
  type: 'exploration',
  key: 'unspoiled',
  setTitleId: [141],
  name: 'Unspoiled',
  morality: 'paragon-city-access',
  badgeText: `The beauty that is Eden Falls came at a terrible price.`,
  notes: `Located 105 yards south of The Cascades marker.`,
  links: [
    { title: 'Unspoiled Badge', href: 'https://homecoming.wiki/wiki/Unspoiled_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [2482, 34, 2350], icon: 'badge', iconText: '2' } },
  ],
}
