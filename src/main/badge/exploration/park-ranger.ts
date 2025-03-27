import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const ParkRanger: BadgeData = {
  type: 'EXPLORATION',
  key: 'park-ranger',
  setTitle: { id: 1632 },
  name: [{ value: 'Park Ranger' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-1279, -87, -512],
  badgeText: [{
    value: 'People\'s Park was established as a place of peace and recreation for the citizens of Praetoria. By patrolling it you do a service to Praetoria and its people.',
  }],
  notes: `Located in ${mapLink(ImperialCity)} 144 yards NW of the People's Park marker.`,
  links: [
    { title: 'Park Ranger Badge', href: 'https://homecoming.wiki/wiki/Park_Ranger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
