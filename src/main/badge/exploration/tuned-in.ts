import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const TunedIn: BadgeData = {
  type: 'EXPLORATION',
  key: 'tuned-in',
  setTitle: { id: 1409 },
  name: [{ value: 'Tuned In' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-1370, -32, -1731],
  badgeText: [{
    value: 'The Total Praetorian Network is the best source of news and entertainment. Well, the best LEGAL source for news and entertainment, anyway.',
  }],
  notes: 'Located in [map:imperial-city] 41 yards NW of the Logos marker.',
  links: [
    { title: 'Tuned In Badge', href: 'https://homecoming.wiki/wiki/Tuned_In_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '8',
}
