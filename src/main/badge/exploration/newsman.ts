import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../map/echo-faultline'

export const Newsman: BadgeData = {
  type: 'EXPLORATION',
  key: 'newsman',
  setTitle: { id: 119 },
  name: [
    { sex: 'M', value: 'Newsman' },
    { sex: 'F', value: 'Newsgirl' },

  ],
  alignment: ['H'],
  badgeText: [{ value: `The Theodore Knight building was home to many Super Groups in the years before the Rikti War.` }],
  mapKey: EchoFaultline.key,
  loc: [1125, -26.9, 1296.7],
  notes: '**Moved from [map:faultline] in Issue 25.**\n'
    + '\n'
    + ' Approx. 513 yrds. S of the "Dark Canyons" marker in front of the doors to a grey stoned high-rise that\'s tilting into the canyon, next to the west perimeter wall.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
