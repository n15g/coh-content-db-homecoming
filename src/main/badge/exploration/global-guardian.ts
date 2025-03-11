import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemAtlasPark } from '../../map/mayhem-atlas-park'

export const GlobalGuardian: BadgeData = {
  type: 'EXPLORATION',
  key: 'global-guardian',
  setTitle: { id: 555 },
  name: [
    { alignment: 'H', value: 'Global Guardian' },
    { alignment: 'V', value: 'Global Threat' },
  ],
  alignment: ['V'],
  mapKey: MayhemAtlasPark.key,
  badgeText: [{
    alignment: 'H', value: 'As a villain you struck at Atlas Park, the very heart of Paragon City, proving you must always be vigilant in its defense.',
  }, {
    alignment: 'V', value: 'You\'ve struck at Atlas Park, the very heart of Paragon City, proving nowhere is safe from villainy!',
  }],
  loc: [1543, 0, 660],
  notes: 'Located on the sidewalk just inside the mission from the entrance point.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Global Guardian Badge', href: 'https://homecoming.wiki/wiki/Global_Guardian_Badge' },
    { title: 'Global Threat Badge', href: 'https://homecoming.wiki/wiki/Global_Threat_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
