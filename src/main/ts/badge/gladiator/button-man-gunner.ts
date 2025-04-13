import { BadgeData } from 'coh-content-db'
import { KeeperOfPeace } from '../achievement/keeper-of-peace'

export const ButtonManGunner: BadgeData = {
  type: 'gladiator',
  key: 'button-man-gunner',
  setTitleId: [482],
  name: 'Button Man Gunner',
  morality: 'heroic',
  badgeText: 'The Family owes you a favor.',
  links: [
    { title: 'Button Man Gunner Badge', href: 'https://homecoming.wiki/wiki/Button_Man_Gunner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: KeeperOfPeace.key, type: 'badge', badgeKey: KeeperOfPeace.key },
  ],
}
