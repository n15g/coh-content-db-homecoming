import { BadgeData } from 'coh-content-db'

export const Allegiant: BadgeData = {
  type: 'veteran',
  key: 'allegiant',
  setTitleId: [1011],
  name: 'Allegiant',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've shown the world that your allegiance is to the people and those in need. You have attained fifty-four Veteran levels.` },
    { alignment: 'villain', value: `You've shown the world that the only one you serve is yourself. In fact, the way you see it, the world should be serving you. You have attained fifty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 54.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-54.png',
}
