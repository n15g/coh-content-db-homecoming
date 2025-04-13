import { BadgeData } from 'coh-content-db'
import { Stonekeeper } from '../exploration/stonekeeper'

export const Wailer: BadgeData = {
  type: 'gladiator',
  key: 'wailer',
  setTitleId: [457],
  name: 'Wailer',
  morality: 'villainous',
  badgeText: 'Your infamy has attracted supernatural notice.',
  links: [
    { title: 'Wailer Badge', href: 'https://homecoming.wiki/wiki/Wailer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Stonekeeper.key, type: 'badge', badgeKey: Stonekeeper.key },
  ],
}
