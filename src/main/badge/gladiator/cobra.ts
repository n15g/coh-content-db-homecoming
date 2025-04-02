import { BadgeData } from 'coh-content-db'
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
  links: [
    { title: 'Cobra Badge', href: 'https://homecoming.wiki/wiki/Cobra_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: SnakeCharmer.key, type: 'BADGE', badgeKey: SnakeCharmer.key },
  ],
}
