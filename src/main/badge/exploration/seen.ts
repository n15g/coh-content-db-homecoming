import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const Seen: BadgeData = {
  type: 'exploration',
  key: 'seen',
  setTitleId: [1406],
  name: 'Seen',
  morality: 'all',
  zoneKey: ImperialCity.key,
  loc: [-460, -56, -336],
  badgeText: [{
    value: 'This is the part of the city where exposure is prime real estate. It\'s the place to see and be seen.',
  }],
  notes: `Located in ${zoneLink(ImperialCity)} 241 yards SE of Aureas, or 401 yards W of the People's Park marker.`,
  links: [
    { title: 'Seen Badge', href: 'https://homecoming.wiki/wiki/Seen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '5',
}
