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
  morality: 'heroic',
  zoneKey: SafeguardIndependencePort.key,
  badgeText: 'Synapse has been seen speeding along the monorail tracks all throughout the city. Independence Port is one of his favorites.',
  loc: [-1948, 0, -3172],
  notes: `On the northeastern side of the inlet stands a crane. Just behind it and slightly to the right (northeast) is a U-shaped building with two payphones adjacent to a narrow alley. The badge is located within that alley.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Honorable Captain Badge', href: 'https://homecoming.wiki/wiki/Honorable_Captain_Badge' },
    { title: 'Dishonorable Captain Badge', href: 'https://homecoming.wiki/wiki/Dishonorable_Captain_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
