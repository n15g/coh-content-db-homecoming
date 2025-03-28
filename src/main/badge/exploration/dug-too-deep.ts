import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const DugTooDeep: BadgeData = {
  type: 'EXPLORATION',
  key: 'dug-too-deep',
  setTitle: { id: 2403 },
  name: [{ value: 'Dug Too Deep' }],
  alignment: ['H'],
  badgeText: [{ value: `Though magical runes and protection spells were once used to hide Oranbega from the rest of the world, all that ended with the Rikti War. Now, anyone who finds a physical entrance in the dark canyons may reach the sunken city... if they're brave or foolish enough to do so.` }],
  zoneKey: EchoFaultline.key,
  loc: [1151.5, -615.4, -28.5],
  notes: 'Directly south of the dark canyons marker, down in the cracks.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '8',
}
