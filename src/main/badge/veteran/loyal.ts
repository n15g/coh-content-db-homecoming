import { BadgeData } from 'coh-content-db'

export const Loyal: BadgeData = {
  type: 'VETERAN',
  key: 'loyal',
  setTitle: { id: 627 },
  name: [
    { value: 'Loyal' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Your diligent service is recognized by the government of Paragon City. You have attained twelve Veteran levels.` },
    { alignment: 'V', value: `Loyalty amongst thieves is such a rare occurrence these days, but you're certainly on track to shake things up a bit. You have attained twelve Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 12',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-12.png' }],
}
