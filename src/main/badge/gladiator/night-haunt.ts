import { BadgeData, badgeLink } from 'coh-content-db'
import { Pirate } from '../defeat/pirate'

export const NightHaunt: BadgeData = {
  type: 'GLADIATOR',
  key: 'night-haunt',
  setTitle: { id: 448 },
  name: [
    { value: 'Night Haunt' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'These tormented souls are bound to you.' },
  ],
  acquisition: `Earn the ${badgeLink(Pirate)} Badge (Spectral Pirates)`,
  links: [
    { title: 'Night Haunt Badge', href: 'https://homecoming.wiki/wiki/Night_Haunt_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
