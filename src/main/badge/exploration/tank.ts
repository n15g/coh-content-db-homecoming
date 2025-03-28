import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const Tank: BadgeData = {
  type: 'EXPLORATION',
  key: 'tank',
  setTitle: { id: 94 },
  name: [{ value: 'Tank' }],
  alignment: ['H'],
  zoneKey: EchoGalaxyCity.key,
  loc: [-1178, 73, -586],
  badgeText: [{ value: 'M1, a hero from World War II, is honored today with a statue in Galaxy City.' }],
  notes: 'The Tank Badge is located along the far southern border of the Orion Beltway neighborhood in Echo: Galaxy City.'
    + '\n\nIt is southeast of the Arena. In the southwest corner of the lower block of the neighborhood, there is a statue of a male bald hero wearing goggles in a fighting pose.'
    + ' The badge marker is on his right (northern) clenched fist. It is moderately difficult, but possible, for non-airborne heroes to get this badge by jumping up the back of the statue\'s'
    + ' right leg.'
    + '\n\nIt is 233 yds south east of the arena.',
  links: [
    { title: 'Tank Badge', href: 'https://homecoming.wiki/wiki/Tank_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
