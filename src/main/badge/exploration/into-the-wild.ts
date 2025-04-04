import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const IntoTheWild: BadgeData = {
  type: 'exploration',
  key: 'into-the-wild',
  setTitleId: [1596],
  name: 'Into the Wild',
  morality: 'all',
  zoneKey: NovaPraetoria.key,
  loc: [-6637, -12, 1728],
  badgeText: `Dangers lurk beyond the secure bubble of the State. The sonic fence keeps the wilderness at bay while also protecting the careless from falling prey to it.`,
  notes: `Located along the SE edge of the island and 0.5 miles SE of the Magisterium marker, tucked into the corner of the rail by the water.`,
  links: [
    { title: 'Into the Wild Badge', href: 'https://homecoming.wiki/wiki/Into_the_Wild_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '5',
}
