import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Imploding: BadgeData = {
  type: 'EXPLORATION',
  key: 'imploding',
  setTitle: { id: 257 },
  name: [{ value: 'Imploding' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: BloodyBay.key,
  loc: [1885, 129, 1337],
  badgeText: [{ value: 'In this building the first of Cape Canaveral\'s scientists was infected and transformed by the Shiva Shard, eventually causing him to implode.' }],
  notes: 'The Imploding Badge marker is located on a building rooftop 110 yards north and slightly east of Meteor Teen.',
  links: [
    { title: 'Imploding Badge', href: 'https://homecoming.wiki/wiki/Imploding_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
