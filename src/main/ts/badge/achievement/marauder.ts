import { BadgeData } from 'coh-content-db'

export const Marauder: BadgeData = {
  type: 'achievement',
  key: 'marauder',
  setTitleId: [2355],
  name: 'Marauder',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have inflicted one hundred thousand points of damage upon your foes.',
  acquisition: 'Deal 100,000 damage.',
  links: [
    { title: 'Marauder Badge', href: 'https://homecoming.wiki/wiki/Marauder_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
