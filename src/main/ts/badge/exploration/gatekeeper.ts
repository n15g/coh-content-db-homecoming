import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardPeregrineIsland } from '../../zone/safeguard-peregrine-island'

export const Gatekeeper: BadgeData = {
  type: 'exploration',
  key: 'gatekeeper',
  setTitleId: [656],
  name: [
    { alignment: 'hero', value: 'Gatekeeper' },
    { alignment: 'villain', value: 'Keymaster' },
  ],
  morality: 'paragon-city-access',
  badgeText: 'The whimsical Gamester placed several presents all throughout Peregrine Island during the holidays. This block had a few of them.',
  notes: `Located in a walled-in area southeast of a Blackwell store almost in the geographic center of the missions zone. (It's the building with the radio antenna on top of it.)

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Gatekeeper Badge', href: 'https://homecoming.wiki/wiki/Gatekeeper_Badge' },
    { title: 'Keymaster Badge', href: 'https://homecoming.wiki/wiki/Keymaster_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardPeregrineIsland.key, coords: [-635, 0, -2868] }, vidiotMapKey: '1' },
  ],
}
