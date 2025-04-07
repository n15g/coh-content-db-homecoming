import { BadgeData, zoneLink } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const SkyChaser: BadgeData = {
  type: 'exploration',
  key: 'sky-chaser',
  setTitleId: [1496],
  name: 'Sky Chaser',
  morality: 'villainous',
  zoneKey: SharkheadIsle.key,
  loc: [304, 127, 2309],
  badgeText: `The Sky Raiders use this as one of their main bases.
Some say that they received funding from Arachnos to build the base in Sharkhead, perhaps to serve as a balance against the Council base nearby.`,
  notes: `Located in ${zoneLink(SharkheadIsle)}, on the Sky Raider base at the south edge of The Pit neighborhood.

It is on the one upper platform that doesn't have a turret on it.`,
  links: [
    { title: 'Sky Chaser Badge', href: 'https://homecoming.wiki/wiki/Sky_Chaser_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '5',
}
