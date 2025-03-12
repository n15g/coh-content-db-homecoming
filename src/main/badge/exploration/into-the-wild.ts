import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../map/nova-praetoria'

export const IntoTheWild: BadgeData = {
  type: 'EXPLORATION',
  key: 'into-the-wild',
  setTitle: { id: 1596 },
  name: [{ value: 'Into the Wild' }],
  alignment: ['H', 'V', 'P'],
  mapKey: NovaPraetoria.key,
  loc: [-6637, -12, 1728],
  badgeText: [{
    value: 'Dangers lurk beyond the secure bubble of the State. The sonic fence keeps the wilderness at bay while also protecting the careless from falling prey to it.',
  }],
  notes: 'Located in [map:nova-praetoria] along the SE edge of the island and 0.5 miles SE of the Magisterium marker.\n'
    + '\n'
    + 'It\'s tucked into the corner of the rail by the water.',
  links: [
    { title: 'Into the Wild Badge', href: 'https://homecoming.wiki/wiki/Into_the_Wild_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
