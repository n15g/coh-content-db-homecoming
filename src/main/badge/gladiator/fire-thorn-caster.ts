import { BadgeData } from 'coh-content-db'
import { DefenderOfTruth } from '../achievement/defender-of-truth'

export const FireThornCaster: BadgeData = {
  type: 'GLADIATOR',
  key: 'fire-thorn-caster',
  setTitle: { id: 486 },
  name: [
    { value: 'Fire Thorn Caster' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Circle of Thorns fears to disobey you.' },
  ],
  acquisition: `Earn the ${DefenderOfTruth} Badge (Circle of Thorns)`,
  links: [
    { title: 'Fire Thorn Caster Badge', href: 'https://homecoming.wiki/wiki/Fire_Thorn_Caster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
