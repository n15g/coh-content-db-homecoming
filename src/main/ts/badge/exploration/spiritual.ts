import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const Spiritual: BadgeData = {
  type: 'exploration',
  key: 'spiritual',
  setTitleId: [409],
  name: 'Spiritual',
  morality: 'paragon-city-access',
  badgeText: `It may be in dangerous territory, but this lake, frequented by the Cabal's strange sprites, is one of the most beautiful sights near Salamanca.`,
  notes: 'Located under the wall of trees, 300 yds NE from the Misty Wood waypoint, NE of the small round pond.',
  links: [
    { title: 'Spiritual Badge', href: 'https://homecoming.wiki/wiki/Spiritual_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Croatoa.key, coords: [-2669, 11, 1102] }, vidiotMapKey: '2' },
  ],
}
