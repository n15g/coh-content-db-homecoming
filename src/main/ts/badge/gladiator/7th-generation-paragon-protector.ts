import { BadgeData } from 'coh-content-db'
import { Infiltrator } from '../defeat/infiltrator'

export const _7thGenerationParagonProtector: BadgeData = {
  type: 'gladiator',
  key: '7th-generation-paragon-protector',
  setTitleId: [501],
  name: '7th Generation Paragon Protector',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'This will be a powerful gladiator in the Arena.',
  links: [
    { title: '7th Generation Paragon Protector Badge', href: 'https://homecoming.wiki/wiki/7th_Generation_Paragon_Protector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Infiltrator.key, type: 'badge', badgeKey: Infiltrator.key },
  ],
}
