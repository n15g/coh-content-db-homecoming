import { BadgeData, badgeLink } from 'coh-content-db'
import { Reformed } from '../defeat/reformed'

export const LongbowSpecOps: BadgeData = {
  type: 'GLADIATOR',
  key: 'longbow-spec-ops',
  setTitle: { id: 467 },
  name: [
    { value: 'Longbow Spec-Ops' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You demand obedience even from your enemies.' },
  ],
  acquisition: `Earn the ${badgeLink(Reformed)} Badge (Longbow)`,
  links: [
    { title: 'Longbow Spec-Ops Badge', href: 'https://homecoming.wiki/wiki/Longbow_Spec-Ops_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
