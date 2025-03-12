import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardPeregrineIsland } from '../../map/safeguard-peregrine-island'

export const Gatekeeper: BadgeData = {
  type: 'EXPLORATION',
  key: 'gatekeeper',
  setTitle: { id: 656 },
  name: [
    { alignment: 'H', value: 'Gatekeeper' },
    { alignment: 'V', value: 'Keymaster' },
  ],
  alignment: ['H'],
  mapKey: SafeguardPeregrineIsland.key,
  badgeText: [{ value: 'The whimsical Gamester placed several presents all throughout Peregrine Island during the holidays. This block had a few of them.' }],
  loc: [-635, 0, -2868],
  notes: 'The Gatekeeper Badge is located in the Peregrine Island Safeguard Mission.\n'
    + '\nIt is located in a walled-in area southeast of a Blackwell store almost in the geographic center of the mission zone. (It\'s the building with the radio antenna on top of it.)\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Gatekeeper Badge', href: 'https://homecoming.wiki/wiki/Gatekeeper_Badge' },
    { title: 'Keymaster Badge', href: 'https://homecoming.wiki/wiki/Keymaster_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
