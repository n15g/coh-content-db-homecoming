import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../map/the-hollows'

export const Geologist: BadgeData = {
  type: 'EXPLORATION',
  key: 'geologist',
  setTitle: { id: 194 },
  name: [{ value: 'Geologist' }],
  alignment: ['H'],
  mapKey: TheHollows.key,
  loc: [-749, -539, -1647],
  badgeText: [{
    value: 'This spot marks the first sighting of the strange, rock-like creatures known as Pumicites.',
  }],
  notes: 'Roughly 80 yards NE-E from the Grendel\'s Gulch\'s marker.',
  links: [
    { title: 'Geologist Badge', href: 'https://homecoming.wiki/wiki/Geologist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
