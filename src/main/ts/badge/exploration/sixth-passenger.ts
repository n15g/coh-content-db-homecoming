import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const SixthPassenger: BadgeData = {
  type: 'exploration',
  key: 'sixth-passenger',
  setTitleId: [1569],
  name: 'Sixth Passenger',
  morality: 'paragon-city-access',
  badgeText: `Sebastian Frost hid in the trunk of this old car for three days after he was broken out from the Zig.
It was after the third day, under the cover of night, that his goons in the Family were able to come rescue him.
Frost has been extra careful ever since then to never get caught again.`,
  notes: `Located 390 yards southwest of the Science store, at the bottom of the zone.

There is a section of road that has been built over the ruined foundations of some buildings, with the badge located near a blue car that is buried underneath.`,
  links: [
    { title: 'Sixth Passenger Badge', href: 'https://homecoming.wiki/wiki/Sixth_Passenger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [-2810, -43, 2569] }, vidiotMapKey: '7' },
  ],
}
