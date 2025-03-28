import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Hungry: BadgeData = {
  type: 'EXPLORATION',
  key: 'hungry',
  setTitle: { id: 256 },
  name: [
    { alignment: 'H', value: 'Hungry' },
    { alignment: 'V', value: 'All Consuming' },
  ],
  alignment: ['H', 'V', 'P'],
  zoneKey: BloodyBay.key,
  loc: [-1194, 0, -743],
  badgeText: [{ value: 'The Shiva Shard fed on the dead here, causing the trees to grow larger and stronger around the old graveyard.' }],
  notes: 'The All Consuming Badge is in the Forgotten Forest neighborhood of Bloody Bay. The badge marker is located about 100 feet south of Meteor Panch.',
  links: [
    { title: 'Hungry Badge', href: 'https://homecoming.wiki/wiki/Hungry_Badge' },
    { title: 'All Consuming Badge', href: 'https://homecoming.wiki/wiki/All_Consuming_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
