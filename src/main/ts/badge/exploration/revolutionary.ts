import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemIndependencePort } from '../../zone/mayhem-independence-port'

export const Revolutionary: BadgeData = {
  type: 'exploration',
  key: 'revolutionary',
  setTitleId: [559],
  name: [
    { alignment: 'hero', value: 'Revolutionary' },
    { alignment: 'villain', value: 'Tyrannical' },
  ],
  morality: 'rogue-isles-access',
  badgeText: [
    { alignment: 'hero', value: `The Family doesn't make as many deals on the beach in Independance Port since you started working in Paragon.` },
    { alignment: 'villain', value: `It isn't uncommon to see the Family taking associates for a walk with cement shoes at this beach in Independence Port.` }
  ],
  notes: `Located on the southwest end of the sandbank in the southwest part of the map.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Revolutionary Badge', href: 'https://homecoming.wiki/wiki/Revolutionary_Badge' },
    { title: 'Tyrannical Badge', href: 'https://homecoming.wiki/wiki/Tyrannical_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemIndependencePort.key, coords: [-1211, -24, -2702], icon: 'badge', iconText: '1' } },
  ],
}
