import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { PerezPark } from '../../zone/perez-park'

export const LandLocked: BadgeData = {
  type: 'exploration',
  key: 'land-locked',
  setTitleId: [95],
  name: 'Land Locked',
  morality: 'heroic',
  zoneKey: EchoGalaxyCity.key,
  loc: [-2036, -43, 1000],
  badgeText: 'This lock holds back the waters of Eastgate Bay, and has been the target of many super criminals bent on flooding Galaxy City.',
  notes: `Located in the Gemini Park neighborhood, in the middle of the large steel doors on the eastern wall of the zone, 270 yards south of the entrance to ${zoneLink(PerezPark)}.`,
  links: [
    { title: 'Land Locked Badge', href: 'https://homecoming.wiki/wiki/Land_Locked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '5',
}
