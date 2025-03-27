import { BadgeData, mapLink } from 'coh-content-db'
import { CreysFolly } from '../../map/creys-folly'
import { Brickstown } from '../../map/brickstown'

export const EyesOfNemesis: BadgeData = {
  type: 'EXPLORATION',
  key: 'eyes-of-nemesis',
  setTitle: { id: 1791 },
  name: [{ value: 'Eyes of Nemesis' }],
  alignment: ['H'],
  mapKey: CreysFolly.key,
  loc: [226, 128, 1520],
  badgeText: [{
    value: `From this non-descript perch near the Brickstown entrance, the agents of Nemesis monitor everyone who enters Crey's Folly.
            Though it would not seem so on the surface, Crey's Folly is a hotly contested area, particularly among groups with a strong scientific background such as Crey and Nemesis.`,
  }],
  notes: `Located in ${mapLink(CreysFolly)} 105 yards SW of the ${mapLink(Brickstown)} gate, on top of the ducting that runs between the holding tanks.`,
  links: [
    { title: 'Eyes of Nemesis Badge', href: 'https://homecoming.wiki/wiki/Eyes_of_Nemesis_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
