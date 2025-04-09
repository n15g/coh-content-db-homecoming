import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardFoundersFalls } from '../../zone/safeguard-founders-falls'

export const FoundersProtector: BadgeData = {
  type: 'exploration',
  key: 'founders-protector',
  setTitleId: [655],
  name: [
    { alignment: 'hero', value: `Founders' Protector` },
    { alignment: 'villain', value: `Founders' Invader` },
  ],
  morality: 'paragon-city-access',
  badgeText: 'After a hostile takeover by the Council, this was one of the last places the few 5th Column troops were seen retreating.',
  notes: `Located at the bottom of the northern ramp outside the police station, almost against the northern force field in the zone.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: `Founders' Protector Badge`, href: 'https://homecoming.wiki/wiki/Founders%27_Protector_Badge' },
    { title: `Founders' Invader Badge`, href: 'https://homecoming.wiki/wiki/Founders%27_Invader_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardFoundersFalls.key, coords: [3233, 0, 2055] }, vidiotMapKey: '1' },
  ],
}
