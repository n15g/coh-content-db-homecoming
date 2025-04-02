import { BadgeData } from 'coh-content-db'
import { Stonekeeper } from '../exploration/stonekeeper'

export const Wailer: BadgeData = {
  type: 'GLADIATOR',
  key: 'wailer',
  setTitle: { id: 457 },
  name: [
    { value: 'Wailer' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Your infamy has attracted supernatural notice.' },
  ],
  links: [
    { title: 'Wailer Badge', href: 'https://homecoming.wiki/wiki/Wailer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Stonekeeper.key, type: 'BADGE', badgeKey: Stonekeeper.key },
  ],
}
