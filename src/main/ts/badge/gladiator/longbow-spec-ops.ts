import { BadgeData } from 'coh-content-db'
import { Reformed } from '../defeat/reformed'

export const LongbowSpecOps: BadgeData = {
  type: 'gladiator',
  key: 'longbow-spec-ops',
  setTitleId: [467],
  name: 'Longbow Spec-Ops',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You demand obedience even from your enemies.',
  links: [
    { title: 'Longbow Spec-Ops Badge', href: 'https://homecoming.wiki/wiki/Longbow_Spec-Ops_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Reformed.key, type: 'badge', badgeKey: Reformed.key },
  ],
}
