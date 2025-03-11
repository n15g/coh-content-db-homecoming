import { BadgeData } from 'coh-content-db'

export const Decimator: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'decimator',
  setTitle: { id: 2358 },
  name: [
    { value: 'Decimator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You have inflicted ten million points of damage upon your foes.` }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deal-damage-v.png' },
  ],
  acquisition: 'Deal 10,000,000 damage to earn this badge',
  links: [
    { title: 'Decimator Badge', href: 'https://homecoming.wiki/wiki/Decimator_Badge' },
  ],
}
