import { BadgeData } from 'coh-content-db'
import { MageHunter } from '../accomplishment/mage-hunter'

export const Sorcerer: BadgeData = {
  type: 'gladiator',
  key: 'sorcerer',
  setTitleId: [470],
  name: [
    { value: 'Sorcerer' },
  ],
  morality: 'villainous',
  badgeText: [
    { value: 'The Tsoo are honored to serve you.' },
  ],
  links: [
    { title: 'Sorcerer Badge', href: 'https://homecoming.wiki/wiki/Sorcerer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: MageHunter.key, type: 'badge', badgeKey: MageHunter.key },
  ],
}
