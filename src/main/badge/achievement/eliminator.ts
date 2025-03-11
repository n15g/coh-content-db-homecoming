import { BadgeData } from 'coh-content-db'

export const Eliminator: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'eliminator',
  setTitle: { id: 2356 },
  name: [
    { value: 'Eliminator' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  badgeText: [
    { value: 'You have inflicted five hundred thousand points of damage upon your foes.' },
  ],
  acquisition: 'Deal 500,000 damage to earn this badge',
  links: [
    { title: 'Eliminator Badge', href: 'https://homecoming.wiki/wiki/Eliminator_Badge' },
  ],
}
