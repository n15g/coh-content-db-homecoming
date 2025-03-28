import { BadgeData } from 'coh-content-db'
import { SafeguardAtlasPark } from '../../zone/safeguard-atlas-park'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'

export const HeartOfTheCity: BadgeData = {
  type: 'EXPLORATION',
  key: 'heart-of-the-city',
  setTitle: { id: 648 },
  name: [
    { alignment: 'H', value: 'Heart of the City' },
    { alignment: 'V', value: 'Hate of the City' },
  ],
  alignment: ['H'],
  zoneKey: SafeguardAtlasPark.key,
  badgeText: [{ value: 'Due to a glitch in the Paragon Nav System, Jose "Broken" Brogan stood here, but many heroes had trouble finding him.' }],
  loc: [1498, 0, -399],
  notes: 'The Heart of the City Badge is located in the Atlas Park Safeguard Mission.\n'
    + '\n'
    + 'It is located just east of the mission entrance, next to a mailbox.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Heart of the City Badge', href: 'https://homecoming.wiki/wiki/Heart_of_the_City_Badge' },
    { title: 'Hate of the City Badge', href: 'https://homecoming.wiki/wiki/Hate_of_the_City_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
