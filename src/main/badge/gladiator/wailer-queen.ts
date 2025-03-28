import { BadgeData } from 'coh-content-db'
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
  links: [
    { title: 'Wailer Queen Badge', href: 'https://homecoming.wiki/wiki/Wailer_Queen_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Imprisoned.key, type: 'BADGE', badgeKey: Imprisoned.key },
  ]],
}
