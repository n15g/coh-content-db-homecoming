import { BadgeData, badgeLink } from 'coh-content-db'
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
  acquisition: `Earn the ${badgeLink(Stonekeeper)} Badge (Wailers)`,
  links: [
    { title: 'Wailer Badge', href: 'https://homecoming.wiki/wiki/Wailer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
