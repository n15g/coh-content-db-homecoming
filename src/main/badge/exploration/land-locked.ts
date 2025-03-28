import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const LandLocked: BadgeData = {
  type: 'EXPLORATION',
  key: 'land-locked',
  setTitle: { id: 95 },
  name: [{ value: 'Land Locked' }],
  alignment: ['H'],
  zoneKey: EchoGalaxyCity.key,
  loc: [-2036, -43, 1000],
  badgeText: [{ value: 'This lock holds back the waters of Eastgate Bay, and has been the target of many super criminals bent on flooding Galaxy City.' }],
  notes: 'The Land Locked Badge is located in the Gemini Park neighborhood in Echo: Galaxy City.'
    + '\n\nIt is in the middle of the large steel doors on the eastern wall of the zone, 270 yards south of the entrance to Perez Park.',
  links: [
    { title: 'Land Locked Badge', href: 'https://homecoming.wiki/wiki/Land_Locked_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
