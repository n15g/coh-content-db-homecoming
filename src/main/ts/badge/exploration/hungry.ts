import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Hungry: BadgeData = {
  type: 'exploration',
  key: 'hungry',
  setTitleId: [256],
  name: [
    { alignment: 'hero', value: 'Hungry' },
    { alignment: 'villain', value: 'All Consuming' },
  ],
  morality: 'all',
  badgeText: 'The Shiva Shard fed on the dead here, causing the trees to grow larger and stronger around the old graveyard.',
  notes: 'Located in the Forgotten Forest neighborhood, approx. 100 feet south of Meteor Panch.',
  links: [
    { title: 'Hungry Badge', href: 'https://homecoming.wiki/wiki/Hungry_Badge' },
    { title: 'All Consuming Badge', href: 'https://homecoming.wiki/wiki/All_Consuming_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: BloodyBay.key, coords: [-1194, 0, -743] }, vidiotMapKey: '2' },
  ],
}
