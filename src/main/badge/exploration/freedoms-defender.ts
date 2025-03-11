import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardSteelCanyon } from '../../map/safeguard-steel-canyon'

export const FreedomsDefender: BadgeData = {
  type: 'EXPLORATION',
  key: 'freedoms-defender',
  setTitle: { id: 651 },
  name: [
    { alignment: 'H', value: 'Freedom\'s Defender' },
    { alignment: 'V', value: 'Freedom\'s Crusher' },
  ],
  alignment: ['H'],
  mapKey: SafeguardSteelCanyon.key,
  badgeText: [{ value: 'The Hellions attempted to burn Steel Canyon to the ground. This block is where one of the first fires was started.' }],
  loc: [-4253, 122, -641],
  notes: 'The Freedom\'s Defender Badge is located in the Steel Canyon Safeguard Mission.\n'
    + '\n'
    + 'It is in the bottom right (southwestern) cutaway corner of a four-story apartment building in the central western part of the map.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Freedom\'s Defender Badge', href: 'https://homecoming.wiki/wiki/Freedom%27s_Defender_Badge' },
    { title: 'Freedom\'s Crusher Badge', href: 'https://homecoming.wiki/wiki/Freedom%27s_Crusher_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
