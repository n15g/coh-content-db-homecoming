import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const OnTheWaterfront: BadgeData = {
  type: 'exploration',
  key: 'on-the-waterfront',
  setTitleId: [1594],
  name: 'On the Waterfront',
  morality: 'all',
  badgeText: `Many retreat to the quiet of the waterfront to get away from the hustle and bustle of the Magisterium.`,
  notes: `Located on the lower ledge along the river, 211 yards south of Underground Access B.`,
  links: [
    { title: 'On the Waterfront Badge', href: 'https://homecoming.wiki/wiki/On_the_Waterfront_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NovaPraetoria.key, coords: [-6748, -76, 72], icon: 'badge', iconText: '8' } },
  ],
}
