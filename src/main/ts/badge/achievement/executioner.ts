import { BadgeData } from 'coh-content-db'

export const Executioner: BadgeData = {
  type: 'achievement',
  key: 'executioner',
  setTitleId: [2346],
  name: 'Executioner',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have inflicted twenty five million points of damage upon your foes.',
  acquisition: 'Deal 25,000,000 damage.',
  links: [
    { title: 'Executioner Badge', href: 'https://homecoming.wiki/wiki/Executioner_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
