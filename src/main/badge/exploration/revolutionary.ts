import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemIndependencePort } from '../../zone/mayhem-independence-port'

export const Revolutionary: BadgeData = {
  type: 'EXPLORATION',
  key: 'revolutionary',
  setTitle: { id: 559 },
  name: [
    { alignment: 'H', value: 'Revolutionary' },
    { alignment: 'V', value: 'Tyrannical' },
  ],
  alignment: ['V'],
  zoneKey: MayhemIndependencePort.key,
  badgeText: [{
    alignment: 'H', value: 'The Family doesn\'t make as many deals on the beach in Independance Port since you started working in Paragon.',
  }, {
    alignment: 'V', value: 'It isn\'t uncommon to see the Family taking associates for a walk with cement shoes at this beach in Independence Port.',
  }],
  loc: [-1211, -24, -2702],
  notes: 'Located on the sandbank in the southwest part of the map, to the southwest end of the sandbank.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Revolutionary Badge', href: 'https://homecoming.wiki/wiki/Revolutionary_Badge' },
    { title: 'Tyrannical Badge', href: 'https://homecoming.wiki/wiki/Tyrannical_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
