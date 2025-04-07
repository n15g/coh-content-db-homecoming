import { BadgeData } from 'coh-content-db'
import { TheSilverBullet } from '../defeat/the-silver-bullet'

export const OmegaWolf: BadgeData = {
  type: 'gladiator',
  key: 'omega-wolf',
  setTitleId: [508],
  name: [
    { value: 'Omega Wolf' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'This beast is yours in the Arena.' },
  ],
  links: [
    { title: 'Omega Wolf Badge', href: 'https://homecoming.wiki/wiki/Omega_Wolf_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: TheSilverBullet.key, type: 'badge', badgeKey: TheSilverBullet.key },
  ],
}
