import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const SecretPath: BadgeData = {
  type: 'exploration',
  key: 'secret-path',
  setTitleId: [1568],
  name: 'Secret Path',
  morality: 'paragon-city-access',
  badgeText: `Tub Ci used this secret path beneath the basketball courts of Brickstown to make a clean escape from the Zig.
Officers were unable to find this well hidden location until it was too late.
The PPD now keep secret agents around the courts - specifically as basketball players - to prevent such a slip up from happening again.`,
  notes: `Located in the Seven Gates neighborhood.

The path to it starts at the basketball courts approximately 250 yards south of the hospital.`,
  links: [
    { title: 'Secret Path Badge', href: 'https://homecoming.wiki/wiki/Secret_Path_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [270, -59, 2193] }, vidiotMapKey: '6' },
  ],
}
