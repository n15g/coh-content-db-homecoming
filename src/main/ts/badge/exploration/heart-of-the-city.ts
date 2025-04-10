import { BadgeData } from 'coh-content-db'
import { SafeguardAtlasPark } from '../../zone/safeguard-atlas-park'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'

export const HeartOfTheCity: BadgeData = {
  type: 'exploration',
  key: 'heart-of-the-city',
  setTitleId: [648],
  name: [
    { alignment: 'hero', value: 'Heart of the City' },
    { alignment: 'villain', value: 'Hate of the City' },
  ],
  morality: 'paragon-city-access',
  badgeText: 'Due to a glitch in the Paragon Nav System, Jose "Broken" Brogan stood here, but many heroes had trouble finding him.',
  notes: `Located just east of the mission entrance, next to a mailbox.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Heart of the City Badge', href: 'https://homecoming.wiki/wiki/Heart_of_the_City_Badge' },
    { title: 'Hate of the City Badge', href: 'https://homecoming.wiki/wiki/Hate_of_the_City_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardAtlasPark.key, coords: [1498, 0, -399], icon: 'badge', iconText: '1' } },
  ],
}
