import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../map/faultline'

export const RockBottom: BadgeData = {
  type: 'EXPLORATION',
  key: 'rock-bottom',
  setTitle: { id: 2406 },
  name: [{ value: 'Rock Bottom' }],
  alignment: ['H'],
  badgeText: [{ value: `This dumping ground is also a hideout for The Lost, within the mounds of refuse. Freakshow have been known to make their way over, looking for spare parts and causing trouble for the ranks of the poor and the homeless, forcing them to accept further mutations to protect themselves.` }],
  mapKey: Faultline.key,
  loc: [-706.6, -87.8, 1757],
  notes: 'Along the east zone wall, in the junkyard with the Lost. It is down a dirt ramp under the building.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '7',
}
