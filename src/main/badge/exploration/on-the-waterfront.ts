import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const OnTheWaterfront: BadgeData = {
  type: 'EXPLORATION',
  key: 'on-the-waterfront',
  setTitle: { id: 1594 },
  name: [{ value: 'On the Waterfront' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NovaPraetoria.key,
  loc: [-6748, -76, 72],
  badgeText: [{
    value: 'Many retreat to the quiet of the waterfront to get away from the hustle and bustle of the Magisterium.',
  }],
  notes: `Located in ${zoneLink(NovaPraetoria)} on the lower ledge along the river, 211 yards south of Underground Access B.`,
  links: [
    { title: 'On the Waterfront Badge', href: 'https://homecoming.wiki/wiki/On_the_Waterfront_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '8',
}
