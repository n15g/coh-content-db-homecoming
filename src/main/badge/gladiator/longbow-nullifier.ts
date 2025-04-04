import { BadgeData } from 'coh-content-db'
import { Lanista } from './lanista'

export const LongbowNullifier: BadgeData = {
  type: 'gladiator',
  key: 'longbow-nullifier',
  setTitleId: [459],
  name: [
    { value: 'Longbow Nullifier' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'These fools are wise to obey you.' },
  ],
  links: [
    { title: 'Longbow Nullifier Badge', href: 'https://homecoming.wiki/wiki/Longbow_Nullifier_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Lanista.key, type: 'badge', badgeKey: Lanista.key },
  ],
}
