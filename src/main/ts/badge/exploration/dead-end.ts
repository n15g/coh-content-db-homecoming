import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const DeadEnd: BadgeData = {
  type: 'exploration',
  key: 'dead-end',
  setTitleId: [1553],
  name: 'Dead End',
  morality: 'paragon-city-access',
  badgeText: `More than one unlucky individual has met his end in this area of the 'Cargo Maze.' The Family is known for luring their victims into this area before 'icing' them.
It's easy enough for them to get away with it, as not many heroes wander around this area.`,
  notes: `Located in the Liberty Quay neighborhood, 458 yards SSW of the neighborhood marker.

The easiest way to find it is to go to the south end of the zone and head due north from the western tree along the security fence of the storage yard.`,
  links: [
    { title: 'Dead End Badge', href: 'https://homecoming.wiki/wiki/Dead_End_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [2213, 0, 4736] }, vidiotMapKey: '5' },
  ],
}
