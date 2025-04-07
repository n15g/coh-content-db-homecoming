import { BadgeData } from 'coh-content-db'
import { DefenderOfTruth } from '../achievement/defender-of-truth'

export const FireThornCaster: BadgeData = {
  type: 'gladiator',
  key: 'fire-thorn-caster',
  setTitleId: [486],
  name: [
    { value: 'Fire Thorn Caster' },
  ],
  morality: 'heroic',
  badgeText: [
    { value: 'The Circle of Thorns fears to disobey you.' },
  ],
  links: [
    { title: 'Fire Thorn Caster Badge', href: 'https://homecoming.wiki/wiki/Fire_Thorn_Caster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: DefenderOfTruth.key, type: 'badge', badgeKey: DefenderOfTruth.key },
  ],
}
