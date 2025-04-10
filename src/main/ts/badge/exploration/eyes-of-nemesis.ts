import { BadgeData, zoneLink } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'
import { Brickstown } from '../../zone/brickstown'

export const EyesOfNemesis: BadgeData = {
  type: 'exploration',
  key: 'eyes-of-nemesis',
  setTitleId: [1791],
  name: 'Eyes of Nemesis',
  morality: 'paragon-city-access',
  badgeText: `From this non-descript perch near the Brickstown entrance, the agents of Nemesis monitor everyone who enters Crey's Folly.
Though it would not seem so on the surface, Crey's Folly is a hotly contested area, particularly among groups with a strong scientific background such as Crey and Nemesis.`,
  notes: `Located 105 yards SW of the ${zoneLink(Brickstown)} gate, on top of the ducting that runs between the holding tanks.`,
  links: [
    { title: 'Eyes of Nemesis Badge', href: 'https://homecoming.wiki/wiki/Eyes_of_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [226, 128, 1520], icon: 'badge', iconText: '3' } },
  ],
}
