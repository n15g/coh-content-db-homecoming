import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const Seen: BadgeData = {
  type: 'EXPLORATION',
  key: 'seen',
  setTitle: { id: 1406 },
  name: [{ value: 'Seen' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-460, -56, -336],
  badgeText: [{
    value: 'This is the part of the city where exposure is prime real estate. It\'s the place to see and be seen.',
  }],
  notes: 'Located in [map:imperial-city] 241 yards SE of Aureas, or 401 yards W of the People\'s Park marker.',
  links: [
    { title: 'Seen Badge', href: 'https://homecoming.wiki/wiki/Seen_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
