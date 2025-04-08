import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const ParkRanger: BadgeData = {
  type: 'exploration',
  key: 'park-ranger',
  setTitleId: [1632],
  name: 'Park Ranger',
  morality: 'all',
  badgeText: `People's Park was established as a place of peace and recreation for the citizens of Praetoria. By patrolling it you do a service to Praetoria and its people.`,
  notes: `Located 144 yards NW of the People's Park marker.`,
  links: [
    { title: 'Park Ranger Badge', href: 'https://homecoming.wiki/wiki/Park_Ranger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-1279, -87, -512] }, vidiotMapKey: '3' },
  ],
}
