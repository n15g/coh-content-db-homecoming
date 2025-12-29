import { BadgeData } from 'coh-content-db'

export const Relentless: BadgeData = {
  type: 'achievement',
  key: 'relentless',
  setTitleId: [2357],
  name: 'Relentless',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have inflicted one million points of damage upon your foes.',
  acquisition: 'Deal 1,000,000 damage.',
  links: [
    { title: 'Relentless Badge', href: 'https://homecoming.wiki/wiki/Relentless_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
}
