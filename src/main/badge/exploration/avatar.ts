import { BadgeData, mapLink } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'

export const Avatar: BadgeData = {
  type: 'EXPLORATION',
  key: 'avatar',
  setTitle: { id: 102 },
  name: [{ value: 'Avatar' }],
  alignment: ['H'],
  mapKey: PerezPark.key,
  loc: [-1538, -32, 3176],
  badgeText: [{
    value: 'Avatar, a hero in Paragon City in the late 1950\'s, had a statue erected to him after his death. The gangs have not been kind to this memorial.',
  }],
  notes: `Located in ${mapLink(PerezPark)} 358 yards north of the Skyway City entrance.`,
  links: [
    { title: 'Avatar Badge', href: 'https://homecoming.wiki/wiki/Avatar_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
