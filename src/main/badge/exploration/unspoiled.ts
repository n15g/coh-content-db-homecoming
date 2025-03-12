import { BadgeData } from 'coh-content-db'
import { Eden } from '../../map/eden'

export const Unspoiled: BadgeData = {
  type: 'EXPLORATION',
  key: 'unspoiled',
  setTitle: { id: 141 },
  name: [{ value: 'Unspoiled' }],
  alignment: ['H'],
  mapKey: Eden.key,
  loc: [2482, 34, 2350],
  badgeText: [{
    value: `The beauty that is Eden Falls came at a terrible price.`,
  }],
  notes: `Located in [map:${Eden.key}] 105 yards south of The Cascades marker.`,
  links: [
    { title: 'Unspoiled Badge', href: 'https://homecoming.wiki/wiki/Unspoiled_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
