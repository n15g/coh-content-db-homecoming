import { BadgeData, badgeLink } from 'coh-content-db'
import { Imprisoned } from '../achievement/imprisoned'

export const WailerQueen: BadgeData = {
  type: 'GLADIATOR',
  key: 'wailer-queen',
  setTitle: { id: 458 },
  name: [
    { value: 'Wailer Queen' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'What does this creature see in you?' },
  ],
  acquisition: `Earn the ${badgeLink(Imprisoned)} Badge (Wailers)`,
  links: [
    { title: 'Wailer Queen Badge', href: 'https://homecoming.wiki/wiki/Wailer_Queen_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
