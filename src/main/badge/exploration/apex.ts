import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../map/echo-faultline'

export const Apex: BadgeData = {
  type: 'EXPLORATION',
  key: 'apex',
  setTitle: { id: 121 },
  name: [{ value: 'Apex' }],
  alignment: ['H'],
  badgeText: [{ value: `Apex tracked Dr. Vahzilok down to this location, but interference from the Circle of Thorns prevented him from capturing the mad scientist.` }],
  mapKey: EchoFaultline.key,
  loc: [277.7, 57.1, -2257.8],
  notes: '**Moved from [map:faultline] in Issue 25.**\n'
    + '\n'
    + 'Approx. 140 yrds SW of the "Subduction" marker on top of a parking structure.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '3',
}
