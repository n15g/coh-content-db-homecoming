import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Imploding: BadgeData = {
  type: 'exploration',
  key: 'imploding',
  setTitleId: [257],
  name: 'Imploding',
  morality: 'all',
  zoneKey: BloodyBay.key,
  loc: [1885, 129, 1337],
  badgeText: `In this building the first of Cape Canaveral's scientists was infected and transformed by the Shiva Shard, eventually causing him to implode.`,
  notes: 'Located on a building rooftop 110 yards north and slightly east of Meteor Teen.',
  links: [
    { title: 'Imploding Badge', href: 'https://homecoming.wiki/wiki/Imploding_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
