import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const SecretPath: BadgeData = {
  type: 'EXPLORATION',
  key: 'secret-path',
  setTitle: { id: 1568 },
  name: [{ value: 'Secret Path' }],
  alignment: ['H'],
  mapKey: Brickstown.key,
  loc: [270, -59, 2193],
  badgeText: [{
    value: 'Tub Ci used this secret path beneath the basketball courts of Brickstown to make a clean escape from the Zig.'
      + ' Officers were unable to find this well hidden location until it was too late.'
      + ' The PPD now keep secret agents around the courts - specifically as basketball players - to prevent such a slip up from happening again.',
  }],
  notes: 'Located in the Seven Gates neighborhood in [map:brickstown]. The path to it starts at the basketball courts approximately 250 yards south of the hospital.',
  links: [
    { title: 'Secret Path Badge', href: 'https://homecoming.wiki/wiki/Secret_Path_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
