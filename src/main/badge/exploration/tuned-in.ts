import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const TunedIn: BadgeData = {
  type: 'exploration',
  key: 'tuned-in',
  setTitleId: [1409],
  name: 'Tuned In',
  morality: 'all',
  zoneKey: ImperialCity.key,
  loc: [-1370, -32, -1731],
  badgeText: `The Total Praetorian Network is the best source of news and entertainment. Well, the best LEGAL source for news and entertainment, anyway.`,
  notes: `Located in ${zoneLink(ImperialCity)} 41 yards NW of the Logos marker.`,
  links: [
    { title: 'Tuned In Badge', href: 'https://homecoming.wiki/wiki/Tuned_In_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '8',
}
