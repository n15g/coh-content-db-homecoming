import { BadgeData } from 'coh-content-db'

export const Devoted: BadgeData = {
  type: 'veteran',
  key: 'devoted',
  setTitleId: [631],
  name: 'Devoted',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Nobody can tear you and Paragon City apart. You have attained twenty-four Veteran levels.` },
    { alignment: 'villain', value: `Nobody can come between you and that big vault o' riches. You have attained twenty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 24.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-24.png',
}
