import { BadgeData, badgeLink } from 'coh-content-db'
import { Infiltrator } from '../defeat/infiltrator'

export const _7thGenerationParagonProtector: BadgeData = {
  type: 'GLADIATOR',
  key: '7th-generation-paragon-protector',
  setTitle: { id: 501 },
  name: [
    { value: '7th Generation Paragon Protector' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'This will be a powerful gladiator in the Arena.' },
  ],
  acquisition: `Earn the ${badgeLink(Infiltrator)} Badge (Crey)`,
  links: [
    { title: '7th Generation Paragon Protector Badge', href: 'https://homecoming.wiki/wiki/7th_Generation_Paragon_Protector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
