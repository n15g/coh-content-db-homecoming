import { BadgeData, badgeLink } from 'coh-content-db'
import { SnakeCharmer } from '../exploration/snake-charmer'

export const Cobra: BadgeData = {
  type: 'GLADIATOR',
  key: 'cobra',
  setTitle: { id: 451 },
  name: [
    { value: 'Cobra' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Sssnakes ssserve you.' },
  ],
  acquisition: `Earn the ${badgeLink(SnakeCharmer)} Badge (Snakes)`,
  links: [
    { title: 'Cobra Badge', href: 'https://homecoming.wiki/wiki/Cobra_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
