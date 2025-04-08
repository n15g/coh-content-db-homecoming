import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const Disappeared: BadgeData = {
  type: 'exploration',
  key: 'disappeared',
  setTitleId: [1637],
  name: 'Disappeared',
  morality: 'all',
  badgeText: `This is where enemies of the State vanish forever. These lost souls have been brought here from the PPD Headquarters for summary execution without review or recourse.`,
  notes: `Located approx. 345 yards NNW of City Access B.`,
  links: [
    { title: 'Disappeared Badge', href: 'https://homecoming.wiki/wiki/Disappeared_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNova.key, coords: [-2640, 641, -1312] }, vidiotMapKey: '2' },
  ],
}
