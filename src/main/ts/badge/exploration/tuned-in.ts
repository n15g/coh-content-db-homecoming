import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const TunedIn: BadgeData = {
  type: 'exploration',
  key: 'tuned-in',
  setTitleId: [1409],
  name: 'Tuned In',
  morality: 'all',
  badgeText: `The Total Praetorian Network is the best source of news and entertainment. Well, the best LEGAL source for news and entertainment, anyway.`,
  notes: `Located 41 yards NW of the Logos marker.`,
  links: [
    { title: 'Tuned In Badge', href: 'https://homecoming.wiki/wiki/Tuned_In_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-1370, -32, -1731], icon: 'badge', iconText: '8' } },
  ],
}
