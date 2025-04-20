import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemAtlasPark } from '../../zone/mayhem-atlas-park'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const GlobalGuardian: BadgeData = {
  type: 'exploration',
  key: 'global-guardian',
  setTitleId: [555],
  name: [
    { alignment: 'hero', value: 'Global Guardian' },
    { alignment: 'villain', value: 'Global Threat' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'As a villain you struck at Atlas Park, the very heart of Paragon City, proving you must always be vigilant in its defense.' },
    { alignment: 'villain', value: `You've struck at Atlas Park, the very heart of Paragon City, proving nowhere is safe from villainy!` },
  ],
  notes: `Located on the sidewalk just inside the entrance point.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'Global Guardian Badge', href: 'https://homecoming.wiki/wiki/Global_Guardian_Badge' },
    { title: 'Global Threat Badge', href: 'https://homecoming.wiki/wiki/Global_Threat_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemAtlasPark.key, coords: [1543, 0, 660], icon: 'badge', iconText: '1' } },
  ],
}
