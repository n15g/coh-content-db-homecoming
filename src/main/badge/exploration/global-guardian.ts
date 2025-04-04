import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemAtlasPark } from '../../zone/mayhem-atlas-park'

export const GlobalGuardian: BadgeData = {
  type: 'exploration',
  key: 'global-guardian',
  setTitleId: [555],
  name: [
    { alignment: 'hero', value: 'Global Guardian' },
    { alignment: 'villain', value: 'Global Threat' },
  ],
  morality: 'villainous',
  zoneKey: MayhemAtlasPark.key,
  badgeText: [
    { alignment: 'hero', value: 'As a villain you struck at Atlas Park, the very heart of Paragon City, proving you must always be vigilant in its defense.' },
    { alignment: 'villain', value: `You've struck at Atlas Park, the very heart of Paragon City, proving nowhere is safe from villainy!` },
  ],
  loc: [1543, 0, 660],
  notes: `Located on the sidewalk just inside the entrance point.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Global Guardian Badge', href: 'https://homecoming.wiki/wiki/Global_Guardian_Badge' },
    { title: 'Global Threat Badge', href: 'https://homecoming.wiki/wiki/Global_Threat_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
