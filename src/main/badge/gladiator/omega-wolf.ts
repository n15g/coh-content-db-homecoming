import { BadgeData } from 'coh-content-db'
import { TheSilverBullet } from '../defeat/the-silver-bullet'

export const OmegaWolf: BadgeData = {
  type: 'GLADIATOR',
  key: 'omega-wolf',
  setTitle: { id: 508 },
  name: [
    { value: 'Omega Wolf' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'This beast is yours in the Arena.' },
  ],
  links: [
    { title: 'Omega Wolf Badge', href: 'https://homecoming.wiki/wiki/Omega_Wolf_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: TheSilverBullet.key, type: 'BADGE', badgeKey: TheSilverBullet.key },
  ]],
}
