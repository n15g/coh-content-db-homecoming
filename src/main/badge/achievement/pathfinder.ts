import { BadgeData } from 'coh-content-db'

export const Pathfinder: BadgeData = {
  type: 'achievement',
  key: 'pathfinder',
  setTitleId: [29, 1663],
  name: [
    { value: 'Pathfinder' },
    { alignment: 'praetorian', sex: 'M', value: 'Knows He Knows Not' },
    { alignment: 'praetorian', sex: 'F', value: 'Knows She Knows Not' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'Your eye for exploration and achievement is recognized. You have earned 100 badges.' },
    { alignment: 'praetorian', value: 'The secrets of all dimensions lie before you. You realize 100 badges is but a step in the right direction.' },
  ],
  acquisition: 'Earn 100 badges.',
  links: [
    { title: 'Pathfinder Badge', href: 'https://homecoming.wiki/wiki/Pathfinder_Badge' },
    { title: 'Knows He Knows Not Badge', href: 'https://homecoming.wiki/wiki/Knows_He_Knows_Not_Badge' },
    { title: 'Knows She Knows Not Badge', href: 'https://homecoming.wiki/wiki/Knows_She_Knows_Not_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pathfinder-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pathfinder-v.png' },
  ],
}
