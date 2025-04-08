import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const BurningTheMidnightOil: BadgeData = {
  type: 'exploration',
  key: 'burning-the-midnight-oil',
  setTitleId: [139],
  name: 'Burning the Midnight Oil',
  morality: 'paragon-city-access',
  badgeText: `The United States once held their oil reserves in Paragon City, until the reserves became an attractive target for villains trying to make names for themselves.`,
  notes: `Located on a catwalk 180 yards northwest of the Crey Factories marker.

It is found on the western side of the second silo rising out of the sludge, from left (north) to right (south).`,
  links: [
    { title: 'Burning the Midnight Oil Badge', href: 'https://homecoming.wiki/wiki/Burning_the_Midnight_Oil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [840, 24, 1798] }, vidiotMapKey: '2' },
  ],
}
