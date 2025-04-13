import { BadgeData } from 'coh-content-db'

export const Loyal: BadgeData = {
  type: 'veteran',
  key: 'loyal',
  setTitleId: [627],
  name: 'Loyal',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Your diligent service is recognized by the government of Paragon City. You have attained twelve Veteran levels.` },
    { alignment: 'villain', value: `Loyalty amongst thieves is such a rare occurrence these days, but you're certainly on track to shake things up a bit. You have attained twelve Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 12.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-12.png',
}
