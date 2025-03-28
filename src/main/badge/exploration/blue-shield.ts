import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const BlueShield: BadgeData = {
  type: 'EXPLORATION',
  key: 'blue-shield',
  setTitle: { id: 92 },
  name: [{ value: 'Blue Shield' }],
  alignment: ['H'],
  zoneKey: EchoGalaxyCity.key,
  loc: [-1170, 39, -2470],
  badgeText: [{
    value: 'Blue Steel, the only hero in Paragon City who works directly for the police, arrested the Tsoo\'s leader Tub Ci on this spot.'
      + ' The charges didn\'t stick, and Tub Ci is free today.',
  }],
  notes: 'The Blue Shield Badge is in the Orion Beltway neighborhood of Echo: Galaxy City.'
    + ' Eighty yards east of the Orion Beltway marker, there is a Vanguard billboard proclaiming, "They are among us...".'
    + '\n\nThe badge marker is on the back left (north) ledge of the billboard.'
    + ' It is possible for non-airborne heroes to earn this badge by climbing up the fire escape to the landing of the brown building southwest of billboard'
    + ' (the same building that has the Bird Watcher Badge on it), jumping onto the lower ledge of the building east of that building, then onto the roof of the Paragon Parts Plus building'
    + ' next to the billboard.'
    + '\n\nFrom the roof of that building, it is an easy jump onto the back ledge of the billboard, where the badge marker is.',
  links: [
    { title: 'Blue Shield Badge', href: 'https://homecoming.wiki/wiki/Blue_Shield_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
