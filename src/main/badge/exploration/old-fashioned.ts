import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../map/faultline'

export const OldFashioned: BadgeData = {
  type: 'EXPLORATION',
  key: 'old-fashioned',
  setTitle: { id: 638 },
  name: [{ value: 'Old Fashioned' }],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Best doughnuts in all of Paragon City! You picked the ultimate bragging rights location.` },
    { alignment: 'V', value: `Who doesn't like donuts? Even Lord Recluse likes donuts.` },
  ],
  mapKey: Faultline.key,
  loc: [-170, 74, -1504],
  notes: 'The Old Fashioned Badge is located inside the doughnut hole of the large inflatable doughnut on top of the Drenched Donuts shop just inside the entrance to [map:${Faultline.key}].',
  links: [
    { title: 'Old Fashioned Badge', href: 'https://homecoming.wiki/wiki/Old_Fashioned_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '4',
}
