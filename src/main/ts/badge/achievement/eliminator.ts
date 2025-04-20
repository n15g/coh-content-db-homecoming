import { BadgeData } from 'coh-content-db'

export const Eliminator: BadgeData = {
  type: 'achievement',
  key: 'eliminator',
  setTitleId: [2356],
  name: 'Eliminator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have inflicted five hundred thousand points of damage upon your foes.',
  acquisition: 'Deal 500,000 damage to earn this badge.',
  links: [
    { title: 'Eliminator Badge', href: 'https://homecoming.wiki/wiki/Eliminator_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
