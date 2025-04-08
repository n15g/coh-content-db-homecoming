import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const Tank: BadgeData = {
  type: 'exploration',
  key: 'tank',
  setTitleId: [94],
  name: 'Tank',
  morality: 'paragon-city-access',
  badgeText: 'M1, a hero from World War II, is honored today with a statue in Galaxy City.',
  notes: `Located 233 yards southeast of the Arena, at the far southern border of the Orion Beltway neighborhood in Echo: Galaxy City.
The badge marker is on the clenched right fist of a statue in the southwest corner, depicting a male bald hero in a fighting pose.`,
  links: [
    { title: 'Tank Badge', href: 'https://homecoming.wiki/wiki/Tank_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoGalaxyCity.key, coords: [-1178, 73, -586] }, vidiotMapKey: '4' },
  ],
}
