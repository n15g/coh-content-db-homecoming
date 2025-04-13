import { BadgeData } from 'coh-content-db'
import { CollateralDamage } from '../../mission/collateral-damage'

export const WarHero: BadgeData = {
  type: 'achievement',
  key: 'war-hero',
  setTitleId: [2098],
  name: 'War Hero',
  morality: 'heroic',
  badgeText: 'You stood in the middle of a war between the Council and the 5th Column, and emerged the victor.',
  links: [
    { title: 'War Hero Badge', href: 'https://homecoming.wiki/wiki/War_Hero_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/war-hero.png',
  requirements: [
    { key: CollateralDamage.key, type: 'mission', missionKey: CollateralDamage.key },
  ],
}
