import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardIndependencePort } from '../../zone/safeguard-independence-port'

export const HonorableCaptain: BadgeData = {
  type: 'exploration',
  key: 'honorable-captain',
  setTitleId: [652],
  name: [
    { alignment: 'hero', value: 'Honorable Captain' },
    { alignment: 'villain', value: 'Dishonorable Captain' },
  ],
  morality: 'paragon-city-access',
  badgeText: 'Synapse has been seen speeding along the monorail tracks all throughout the city. Independence Port is one of his favorites.',
  notes: `Located in a narrow alley behind and slightly northeast of the crane on the northeastern side of the inlet. The alley sits beside a U-shaped building with two payphones, and the badge is found within.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Honorable Captain Badge', href: 'https://homecoming.wiki/wiki/Honorable_Captain_Badge' },
    { title: 'Dishonorable Captain Badge', href: 'https://homecoming.wiki/wiki/Dishonorable_Captain_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardIndependencePort.key, coords: [-1948, 0, -3172] }, vidiotMapKey: '1' },
  ],
}
