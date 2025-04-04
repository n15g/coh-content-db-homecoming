import { BadgeData } from 'coh-content-db'
import { Reformed } from '../defeat/reformed'

export const LongbowSpecOps: BadgeData = {
  type: 'gladiator',
  key: 'longbow-spec-ops',
  setTitleId: [467],
  name: [
    { value: 'Longbow Spec-Ops' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'You demand obedience even from your enemies.' },
  ],
  links: [
    { title: 'Longbow Spec-Ops Badge', href: 'https://homecoming.wiki/wiki/Longbow_Spec-Ops_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Reformed.key, type: 'badge', badgeKey: Reformed.key },
  ],
}
