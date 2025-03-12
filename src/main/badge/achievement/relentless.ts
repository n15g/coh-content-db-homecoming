import { BadgeData } from 'coh-content-db'

export const Relentless: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'relentless',
  setTitle: { id: 2357 },
  name: [
    { value: 'Relentless' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  badgeText: [
    { value: 'You have inflicted one million points of damage upon your foes.' },
  ],
  acquisition: 'Deal 1,000,000 damage to earn this badge',
  links: [
    { title: 'Relentless Badge', href: 'https://homecoming.wiki/wiki/Relentless_Badge' },
  ],
}
