import { BadgeData } from 'coh-content-db'

export const Devoted: BadgeData = {
  type: 'VETERAN',
  key: 'devoted',
  setTitle: { id: 631 },
  name: [
    { value: 'Devoted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Nobody can tear you and Paragon City apart. You have attained twenty-four Veteran levels.` },
    { alignment: 'V', value: `Nobody can come between you and that big vault o' riches. You have attained twenty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 24',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-24.png' }],
}
