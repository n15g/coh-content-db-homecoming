import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const Forsaken: BadgeData = {
  type: 'EXPLORATION',
  key: 'forsaken',
  setTitle: { id: 2399 },
  name: [{ value: 'Forsaken' }],
  alignment: ['H'],
  badgeText: [{ value: `Once a technological pride and joy of the city of Overbrook, the city's hydroelectric power plant was largely abandoned after the Rikti attack. It now languishes in disrepair.` }],
  zoneKey: EchoFaultline.key,
  loc: [332.4, -90.8, 3489],
  notes: 'On the platform between the southeast and southwest turbine towers in the dam section.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '4',
}
