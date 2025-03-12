import { BadgeData } from 'coh-content-db'

export const Marauder: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'marauder',
  setTitle: { id: 2355 },
  name: [
    { value: 'Marauder' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  badgeText: [
    { value: 'You have inflicted one hundred thousand points of damage upon your foes.' },
  ],
  acquisition: 'Deal 100,000 damage to earn this badge',
  links: [
    { title: 'Marauder Badge', href: 'https://homecoming.wiki/wiki/Marauder_Badge' },
  ],
}
