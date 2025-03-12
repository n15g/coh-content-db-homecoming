import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../map/cimerora'

export const DepthsOfTime: BadgeData = {
  type: 'EXPLORATION',
  key: 'depths-of-time',
  setTitle: { id: 990 },
  name: [{ value: 'Depths of Time' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Cimerora.key,
  loc: [-1108, 9, 4262],
  badgeText: [{
    value: 'You have traveled back in time to the Roman era. Here is the origins of all you have come to understand as heroic and villainous.',
  }],
  notes: 'The Depths of Time Badge is located in Cimerora. The marker is by the fountain in the central square, just in front of Marcus Valerius.',
  links: [
    { title: 'Depths of Time Badge', href: 'https://homecoming.wiki/wiki/Depths_of_Time_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
