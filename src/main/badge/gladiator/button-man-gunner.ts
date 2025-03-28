import { BadgeData, badgeLink } from 'coh-content-db'
import { KeeperOfPeace } from '../achievement/keeper-of-peace'

export const ButtonManGunner: BadgeData = {
  type: 'GLADIATOR',
  key: 'button-man-gunner',
  setTitle: { id: 482 },
  name: [
    { value: 'Button Man Gunner' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Family owes you a favor.' },
  ],
  acquisition: `Earn the ${badgeLink(KeeperOfPeace)} Badge (The Family)`,
  links: [
    { title: 'Button Man Gunner Badge', href: 'https://homecoming.wiki/wiki/Button_Man_Gunner_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
