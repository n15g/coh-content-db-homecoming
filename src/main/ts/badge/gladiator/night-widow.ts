import { BadgeData } from 'coh-content-db'
import { DefenderOfTruth } from '../achievement/defender-of-truth'

export const NightWidow: BadgeData = {
  type: 'gladiator',
  key: 'night-widow',
  setTitleId: [444],
  name: 'Night Widow',
  morality: 'villainous',
  badgeText: 'Night Widows fight for those they deem worthy.',
  links: [
    { title: 'Night Widow Badge', href: 'https://homecoming.wiki/wiki/Night_Widow_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: DefenderOfTruth.key, type: 'badge', badgeKey: DefenderOfTruth.key },
  ],
}
