import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardBrickstown } from '../../zone/safeguard-brickstown'

export const Cornerstone: BadgeData = {
  type: 'EXPLORATION',
  key: 'cornerstone',
  setTitle: { id: 654 },
  name: [
    { alignment: 'H', value: 'Cornerstone' },
    { alignment: 'V', value: 'Weak Point' },
  ],
  alignment: ['H'],
  zoneKey: SafeguardBrickstown.key,
  badgeText: [{ value: 'The Freedom Phalanx and WISDOM stopped a massive Banished Pantheon attack in this area.' }],
  loc: [-406, 0, -130],
  notes: 'The Cornerstone Badge is located in the Brickstown Safeguard Mission.\n'
    + '\n'
    + 'It is on the ground just left (west) of the warehouse building in the northeastern corner of the zone, between the two right (eastern) legs of a large power line tower.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Cornerstone Badge', href: 'https://homecoming.wiki/wiki/Cornerstone_Badge' },
    { title: 'Weak Point Badge', href: 'https://homecoming.wiki/wiki/Weak_Point_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
