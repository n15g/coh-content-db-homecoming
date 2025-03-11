import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../map/croatoa'

export const Spiritual: BadgeData = {
  type: 'EXPLORATION',
  key: 'spiritual',
  setTitle: { id: 409 },
  name: [{ value: 'Spiritual' }],
  alignment: ['H'],
  mapKey: Croatoa.key,
  loc: [-2669, 11, 1102],
  badgeText: [{
    value: 'It may be in dangerous territory, but this lake, frequented by the Cabal\'s strange sprites, is one of the most beautiful sights near Salamanca.',
  }],
  notes: 'Located under the wall of trees, 300 yds NE from the Misty Wood waypoint. It is to the NE of the small round pond.',
  links: [
    { title: 'Spiritual Badge', href: 'https://homecoming.wiki/wiki/Spiritual_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
