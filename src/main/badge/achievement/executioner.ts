import { BadgeData } from 'coh-content-db'

export const Executioner: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'executioner',
  setTitle: { id: 2346 },
  name: [
    { value: 'Executioner' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You have inflicted twenty five million points of damage upon your foes.` }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  acquisition: 'Deal 25,000,000 damage to earn this badge',
  links: [
    { title: 'Executioner Badge', href: 'https://homecoming.wiki/wiki/Executioner_Badge' },
  ],
}
