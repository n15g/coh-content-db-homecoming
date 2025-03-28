import { BadgeData } from 'coh-content-db'
import { DefenderOfTruth } from '../achievement/defender-of-truth'

export const NightWidow: BadgeData = {
  type: 'GLADIATOR',
  key: 'night-widow',
  setTitle: { id: 444 },
  name: [
    { value: 'Night Widow' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Night Widows fight for those they deem worthy.' },
  ],
  links: [
    { title: 'Night Widow Badge', href: 'https://homecoming.wiki/wiki/Night_Widow_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: DefenderOfTruth.key, type: 'BADGE', badgeKey: DefenderOfTruth.key },
  ]],
}
