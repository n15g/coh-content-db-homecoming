import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const Disappeared: BadgeData = {
  type: 'EXPLORATION',
  key: 'disappeared',
  setTitle: { id: 1637 },
  name: [{ value: 'Disappeared' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  loc: [-2640, 641, -1312],
  badgeText: [{
    value: 'This is where enemies of the State vanish forever. These lost souls have been brought here from the PPD Headquarters for summary execution without review or recourse.',
  }],
  notes: 'Located in [map:underground-nova] approximately 345 yards NNW of City Access B.',
  links: [
    { title: 'Disappeared Badge', href: 'https://homecoming.wiki/wiki/Disappeared_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
