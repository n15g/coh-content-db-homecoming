import { BadgeData } from 'coh-content-db'
import { Pirate } from '../defeat/pirate'

export const NightHaunt: BadgeData = {
  type: 'gladiator',
  key: 'night-haunt',
  setTitleId: [448],
  name: 'Night Haunt',
  morality: 'villainous',
  badgeText: 'These tormented souls are bound to you.',
  links: [
    { title: 'Night Haunt Badge', href: 'https://homecoming.wiki/wiki/Night_Haunt_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Pirate.key, type: 'badge', badgeKey: Pirate.key },
  ],
}
