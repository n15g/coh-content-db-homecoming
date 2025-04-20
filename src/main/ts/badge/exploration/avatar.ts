import { BadgeData } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'

export const Avatar: BadgeData = {
  type: 'exploration',
  key: 'avatar',
  setTitleId: [102],
  name: 'Avatar',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Avatar, a hero in Paragon City in the late 1950's, had a statue erected to him after his death. The gangs have not been kind to this memorial.`,
  notes: `Located 358 yards north of the Skyway City entrance.`,
  links: [
    { title: 'Avatar Badge', href: 'https://homecoming.wiki/wiki/Avatar_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PerezPark.key, coords: [-1538, -32, 3176], icon: 'badge', iconText: '2' } },
  ],
}
