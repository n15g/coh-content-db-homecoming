import { BadgeData, mapLink } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'

export const Territorial: BadgeData = {
  type: 'EXPLORATION',
  key: 'territorial',
  setTitle: { id: 101 },
  name: [{ value: 'Territorial' }],
  alignment: ['H'],
  mapKey: PerezPark.key,
  loc: [-2015, -56, 1586],
  badgeText: [{
    value: 'The territory around this bridge has been hotly contested turf between the Skulls and Hellions for some time now.',
  }],
  notes: `Located in ${mapLink(PerezPark)} 44 yards east of the Perez Park neighborhood marker in the maze under the trees.

          To find it, enter the tree maze from the east side almost straight west of the Atlas Park entrance.`,
  links: [
    { title: 'Territorial Badge', href: 'https://homecoming.wiki/wiki/Territorial_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
