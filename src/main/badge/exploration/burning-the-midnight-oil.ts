import { BadgeData, zoneLink } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const BurningTheMidnightOil: BadgeData = {
  type: 'EXPLORATION',
  key: 'burning-the-midnight-oil',
  setTitle: { id: 139 },
  name: [{ value: 'Burning the Midnight Oil' }],
  alignment: ['H'],
  zoneKey: CreysFolly.key,
  loc: [840, 24, 1798],
  badgeText: [{
    value: 'The United States once held their oil reserves in Paragon City, until the reserves became an attractive target for villains trying to make names for themselves.',
  }],
  notes: `Located in ${zoneLink(CreysFolly)} on a catwalk 180 yards northwest of the Crey Factories marker.

It is on the western side of the second silo rising out of the sludge, from left (north) to right (south).`,
  links: [
    { title: 'Burning the Midnight Oil Badge', href: 'https://homecoming.wiki/wiki/Burning_the_Midnight_Oil_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
