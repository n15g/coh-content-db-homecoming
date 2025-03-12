import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardIndependencePort } from '../../map/safeguard-independence-port'

export const HonorableCaptain: BadgeData = {
  type: 'EXPLORATION',
  key: 'honorable-captain',
  setTitle: { id: 652 },
  name: [
    { alignment: 'H', value: 'Honorable Captain' },
    { alignment: 'V', value: 'Dishonorable Captain' },
  ],
  alignment: ['H'],
  mapKey: SafeguardIndependencePort.key,
  badgeText: [{ value: 'Synapse has been seen speeding along the monorail tracks all throughout the city. Independence Port is one of his favorites.' }],
  loc: [-1948, 0, -3172],
  notes: 'The Honorable Captain Badge is located in the Independence Port Safeguard Mission.\n'
    + '\n'
    + 'On the northeastern side of the inlet, there is a crane. Behind and to the right (northeast) of the the crane, there is a U-shaped building with two pay telephones next to a small alley,'
    + ' the badge is in that alley.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Honorable Captain Badge', href: 'https://homecoming.wiki/wiki/Honorable_Captain_Badge' },
    { title: 'Dishonorable Captain Badge', href: 'https://homecoming.wiki/wiki/Dishonorable_Captain_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
