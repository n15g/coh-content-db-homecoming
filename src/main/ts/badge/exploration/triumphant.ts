import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Triumphant: BadgeData = {
  type: 'exploration',
  key: 'triumphant',
  setTitleId: [293],
  name: 'Triumphant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The symbolism is hard to miss: whoever controls the Warburg rockets controls the world. Whether this is pure delusion or an ominous warning is a subject of much debate.',
  notes: `Located at the top of the golden globe with the rocket flying around it in the center of the map.`,
  links: [{ title: 'Triumphant Badge', href: 'https://homecoming.wiki/wiki/Triumphant_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [228, 274, 33], icon: 'badge', iconText: '3' } },
  ],
}
